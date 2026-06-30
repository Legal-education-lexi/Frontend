import { useQuery } from '@tanstack/react-query'
import { ArrowRight, CalendarDays, Clock3, Landmark } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { newsQuery } from '../shared/lib/queryOptions'
import { PageHeader } from '../shared/layout/PageHeader'

export function NewsPage() {
  const { data: news = [] } = useQuery(newsQuery)

  return (
    <main className="page page-enter">
      <PageHeader title="Новости" subtitle="Короткие правовые брифы: практика, нормы и выводы для учебных кейсов." />
      <div className="news-list">
        {news.map((item) => (
          <Link className="news-card" to={`/news/${item.id}`} key={item.id}>
            <div className="news-card-meta">
              <span className="eyebrow">{item.category}</span>
              <span>{item.date}</span>
            </div>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <div className="news-card-footer">
              <span>
                <Clock3 size={13} strokeWidth={1.5} />
                {item.readingTime}
              </span>
              <ArrowRight size={15} strokeWidth={1.45} />
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export function NewsDetailPage() {
  const { newsId } = useParams()
  const { data: news = [] } = useQuery(newsQuery)
  const item = news.find((newsItem) => newsItem.id === newsId)

  if (!item) {
    return <Navigate to="/news" replace />
  }

  return (
    <main className="page page-enter news-detail-page">
      <PageHeader
        title={item.title}
        subtitle={item.lead}
        backTo="/news"
        backLabel="Все новости"
      />
      <article className="news-article">
        <div className="news-article-meta">
          <span>
            <Landmark size={14} strokeWidth={1.45} />
            {item.category}
          </span>
          <span>
            <CalendarDays size={14} strokeWidth={1.45} />
            {item.date}
          </span>
          <span>
            <Clock3 size={14} strokeWidth={1.45} />
            {item.readingTime}
          </span>
        </div>
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <footer>
          <span className="eyebrow">Источник</span>
          <strong>{item.source}</strong>
        </footer>
      </article>
    </main>
  )
}
