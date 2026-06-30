import { useEffect, useMemo, useState, type DragEvent, type KeyboardEvent } from 'react'
import { ArrowRight, BadgeCheck, Building2, Check, Scale, UserRound, X } from 'lucide-react'
import type { PracticeCard, PracticeTermGroup } from '../../shared/types/domain'

type Feedback = 'correct' | 'incorrect' | null

const groupIcons = {
  person: UserRound,
  building: Building2,
  scale: Scale,
}

function getGroupIcon(group: PracticeTermGroup) {
  return groupIcons[group.icon]
}

function sameStringSet(first: string[], second: string[]) {
  return first.length === second.length && first.every((item) => second.includes(item))
}

function getCorrectAnswer(card: PracticeCard) {
  if (card.type === 'missing-term' || card.type === 'case-choice') return card.correctAnswer
  if (card.type === 'true-false') return card.correctAnswer ? 'Верно' : 'Не верно'
  if (card.type === 'norm-selection') return card.correctAnswers.join(', ')

  return card.groups
    .map((group) => `${group.title}: ${card.terms.filter((term) => term.groupId === group.id).map((term) => term.label).join(', ')}`)
    .join('; ')
}

export function PracticeFlow({ cards }: { cards: PracticeCard[] }) {
  const [cardIndex, setCardIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedTruth, setSelectedTruth] = useState<boolean | null>(null)
  const [selectedNorms, setSelectedNorms] = useState<string[]>([])
  const [groupAssignments, setGroupAssignments] = useState<Record<string, string>>({})
  const [activeTermId, setActiveTermId] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<Feedback>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)

  const card = cards[cardIndex]
  const progress = cards.length ? Math.round(((cardIndex + 1) / cards.length) * 100) : 0

  useEffect(() => {
    setSelectedOption('')
    setSelectedTruth(null)
    setSelectedNorms([])
    setGroupAssignments({})
    setActiveTermId(null)
    setFeedback(null)
  }, [card?.id])

  const isReadyToCheck = useMemo(() => {
    if (!card) return false
    if (card.type === 'missing-term' || card.type === 'case-choice') return selectedOption.length > 0
    if (card.type === 'true-false') return selectedTruth !== null
    if (card.type === 'norm-selection') return selectedNorms.length > 0

    return card.terms.every((term) => groupAssignments[term.id])
  }, [card, groupAssignments, selectedNorms.length, selectedOption, selectedTruth])

  if (!card) {
    return (
      <section className="practice-empty">
        <span className="eyebrow">Поток заданий</span>
        <h1>Карточки пока не добавлены</h1>
      </section>
    )
  }

  function checkAnswer() {
    if (!card) return

    let isCorrect = false

    if (card.type === 'missing-term' || card.type === 'case-choice') {
      isCorrect = selectedOption === card.correctAnswer
    } else if (card.type === 'true-false') {
      isCorrect = selectedTruth === card.correctAnswer
    } else if (card.type === 'norm-selection') {
      isCorrect = sameStringSet(selectedNorms, card.correctAnswers)
    } else {
      isCorrect = card.terms.every((term) => groupAssignments[term.id] === term.groupId)
    }

    setFeedback(isCorrect ? 'correct' : 'incorrect')
    if (isCorrect) setCorrectCount((count) => count + 1)
  }

  function goNext() {
    if (cardIndex === cards.length - 1) {
      setFinished(true)
      return
    }

    setCardIndex((index) => index + 1)
  }

  function restart() {
    setCardIndex(0)
    setCorrectCount(0)
    setFinished(false)
  }

  function assignTerm(termId: string, groupId: string) {
    if (feedback) return

    setGroupAssignments((current) => ({ ...current, [termId]: groupId }))
    setActiveTermId(null)
  }

  function assignActiveTerm(groupId: string) {
    if (!activeTermId) return

    assignTerm(activeTermId, groupId)
  }

  function handleTermDragStart(event: DragEvent<HTMLElement>, termId: string) {
    if (feedback) return

    event.dataTransfer.setData('text/plain', termId)
    event.dataTransfer.effectAllowed = 'move'
    setActiveTermId(termId)
  }

  function handleGroupDragOver(event: DragEvent<HTMLElement>) {
    if (feedback) return

    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }

  function handleGroupDrop(event: DragEvent<HTMLElement>, groupId: string) {
    if (feedback) return

    event.preventDefault()
    const termId = event.dataTransfer.getData('text/plain')
    if (termId) assignTerm(termId, groupId)
  }

  function handleDropZoneKeyDown(event: KeyboardEvent<HTMLElement>, groupId: string) {
    if (event.key !== 'Enter' && event.key !== ' ') return

    event.preventDefault()
    assignActiveTerm(groupId)
  }

  function removeTerm(termId: string) {
    if (feedback) return

    setGroupAssignments((current) => {
      const next = { ...current }
      delete next[termId]
      return next
    })
  }

  function toggleNorm(option: string) {
    if (feedback) return

    setSelectedNorms((current) => (
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
    ))
  }

  if (finished) {
    return (
      <section className="practice-finish page-enter">
        <span className="eyebrow">Поток завершён</span>
        <h1>{correctCount} из {cards.length}</h1>
        <p>Ответы проверены. Моки уже разделены по типам карточек, поэтому следующий шаг — заменить источник данных на реальный API.</p>
        <button className="complete-button" type="button" onClick={restart}>
          Пройти ещё раз <ArrowRight size={17} />
        </button>
      </section>
    )
  }

  return (
    <section className="practice-flow">
      <header className="practice-hero">
        <div>
          <h1>{card.title}</h1>
        </div>
        <div className="practice-status">
          <div className="practice-counter" aria-label={`Карточка ${cardIndex + 1} из ${cards.length}`}>
            {cardIndex + 1} из {cards.length}
          </div>
          <div className="practice-progress" aria-hidden="true">
            <i><b style={{ width: `${progress}%` }} /></i>
          </div>
        </div>
      </header>

      <article className={`practice-task ${feedback ? `is-${feedback}` : ''}`}>
        {card.type === 'term-grouping' ? (
          <>
            <div className="term-group-grid">
              {card.groups.map((group) => {
                const Icon = getGroupIcon(group)
                const assignedTerms = card.terms.filter((term) => groupAssignments[term.id] === group.id)

                return (
                  <div className="term-group" key={group.id}>
                    <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                    <strong>{group.title}</strong>
                    <div
                      className="drop-zone"
                      role="button"
                      tabIndex={feedback ? -1 : 0}
                      onClick={() => assignActiveTerm(group.id)}
                      onKeyDown={(event) => handleDropZoneKeyDown(event, group.id)}
                      onDragOver={handleGroupDragOver}
                      onDrop={(event) => handleGroupDrop(event, group.id)}
                    >
                      {assignedTerms.length ? assignedTerms.map((term) => (
                        <span
                          className="term-chip assigned"
                          draggable={!feedback}
                          key={term.id}
                          onDragStart={(event) => handleTermDragStart(event, term.id)}
                        >
                          {term.label}
                          <span role="button" tabIndex={0} onClick={(event) => { event.stopPropagation(); removeTerm(term.id) }}>×</span>
                        </span>
                      )) : 'Перетащите термины сюда'}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="term-bank" aria-label="Термины для распределения">
              {card.terms.filter((term) => !groupAssignments[term.id]).map((term) => (
                <button
                  className={`term-chip ${activeTermId === term.id ? 'selected' : ''}`}
                  type="button"
                  key={term.id}
                  onClick={() => setActiveTermId((current) => current === term.id ? null : term.id)}
                  draggable={!feedback}
                  onDragStart={(event) => handleTermDragStart(event, term.id)}
                  disabled={Boolean(feedback)}
                >
                  {term.label}
                </button>
              ))}
            </div>
          </>
        ) : null}

        {card.type === 'missing-term' ? (
          <>
            <p className="definition-text">
              {card.textBefore ? <>{card.textBefore} </> : null}
              <span className="blank-line" aria-label="Пропущенное слово">{selectedOption || '—'}</span>
              {card.textAfter}
            </p>
            <div className="choice-list">
              {card.options.map((option) => (
                <button
                  className={`choice-option ${selectedOption === option ? 'selected' : ''} ${feedback && option === card.correctAnswer ? 'right' : ''} ${feedback === 'incorrect' && selectedOption === option ? 'wrong' : ''}`}
                  type="button"
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  disabled={Boolean(feedback)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : null}

        {card.type === 'true-false' ? (
          <>
            <p className="statement-text"><span className="blank-line" />{card.statement}</p>
            <div className="truth-actions">
              <button
                className={`truth-button ${selectedTruth === true ? 'selected' : ''} ${feedback && card.correctAnswer ? 'right' : ''} ${feedback === 'incorrect' && selectedTruth === true ? 'wrong' : ''}`}
                type="button"
                onClick={() => setSelectedTruth(true)}
                disabled={Boolean(feedback)}
              >
                Верно
              </button>
              <button
                className={`truth-button ${selectedTruth === false ? 'selected' : ''} ${feedback && !card.correctAnswer ? 'right' : ''} ${feedback === 'incorrect' && selectedTruth === false ? 'wrong' : ''}`}
                type="button"
                onClick={() => setSelectedTruth(false)}
                disabled={Boolean(feedback)}
              >
                Не верно
              </button>
            </div>
          </>
        ) : null}

        {card.type === 'norm-selection' ? (
          <>
            <p className="case-text">{card.caseText}</p>
            <div className="norm-picker">
              <span>Выберите нормы</span>
              <div className="norm-selected">
                {selectedNorms.length ? selectedNorms.map((norm) => (
                  <button className="norm-chip" type="button" key={norm} onClick={() => toggleNorm(norm)} disabled={Boolean(feedback)}>
                    {norm} <X size={14} />
                  </button>
                )) : <em>Нормы ещё не выбраны</em>}
              </div>
              <div className="norm-options">
                {card.options.map((option) => (
                  <button
                    className={`norm-option ${selectedNorms.includes(option) ? 'selected' : ''} ${feedback && card.correctAnswers.includes(option) ? 'right' : ''} ${feedback === 'incorrect' && selectedNorms.includes(option) && !card.correctAnswers.includes(option) ? 'wrong' : ''}`}
                    type="button"
                    key={option}
                    onClick={() => toggleNorm(option)}
                    disabled={Boolean(feedback)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : null}

        {card.type === 'case-choice' ? (
          <>
            <p className="case-text">{card.caseText}</p>
            <p className="case-question">{card.question}</p>
            <div className="choice-list">
              {card.options.map((option) => (
                <button
                  className={`choice-option ${selectedOption === option ? 'selected' : ''} ${feedback && option === card.correctAnswer ? 'right' : ''} ${feedback === 'incorrect' && selectedOption === option ? 'wrong' : ''}`}
                  type="button"
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  disabled={Boolean(feedback)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : null}
      </article>

      {feedback ? (
        <div className={`answer-feedback ${feedback}`}>
          {feedback === 'correct' ? <Check size={18} /> : <X size={18} />}
          <span>
            {feedback === 'correct' ? 'Верно. Ответ засчитан.' : `Не совсем. Правильный ответ: ${getCorrectAnswer(card)}`}
          </span>
        </div>
      ) : null}

      <button
        className={`complete-button ${feedback === 'correct' ? 'done' : ''}`}
        type="button"
        onClick={feedback ? goNext : checkAnswer}
        disabled={!feedback && !isReadyToCheck}
      >
        {feedback ? (
          <>{cardIndex === cards.length - 1 ? 'Завершить' : 'Следующая карточка'} <ArrowRight size={17} /></>
        ) : (
          <>Проверить <BadgeCheck size={17} /></>
        )}
      </button>
    </section>
  )
}
