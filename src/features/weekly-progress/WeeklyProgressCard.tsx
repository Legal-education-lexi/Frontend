import { weeklyProgress } from '../../data/mockData'

export function WeeklyProgressCard() {
  return (
    <section className="weekly-card">
      <div className="weekly-summary">
        <span className="eyebrow">Прогресс недели</span>
        <strong>{weeklyProgress.time}</strong>
        <p>из {weeklyProgress.goal}<br /><span>На пути к цели</span></p>
      </div>
      <div className="week-chart" aria-label="Активность по дням недели">
        {weeklyProgress.days.map((item) => (
          <div className={`day-column ${item.current ? 'current' : ''}`} key={item.day}>
            <span className="today-label">{item.current ? 'Сегодня' : ''}</span>
            <div className="bar-track"><i style={{ height: `${item.value}%` }} /></div>
            <span>{item.day}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
