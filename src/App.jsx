import { useState, useEffect, useRef, useCallback } from 'react'
import Sidebar from './components/layout/Sidebar'
import PageHeader from './components/layout/PageHeader.jsx'
import ContentArea from './components/layout/ContentArea'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activePaperId] = useState('2508-20861')
  const [activeSectionId, setActiveSectionId] = useState('introduction')
  const [progress, setProgress] = useState(0)
  const scrollRef = useRef(null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const { scrollTop, scrollHeight, clientHeight } = el
    const total = scrollHeight - clientHeight

    setProgress(total > 0 ? (scrollTop / total) * 100 : 0)
  }, [])

  const handleSelectSection = (id) => {
    setActiveSectionId(id)

    const el = document.getElementById(`section-${id}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      background: 'var(--surface)',
      fontFamily: "'Inter', sans-serif",
    }}>
      <Sidebar
        activePaperId={activePaperId}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSection}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(d => !d)}
      />

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{ flex: 1, overflowY: 'auto' }}
        >
          <ContentArea>
            <PageHeader
              darkMode={darkMode}
              onToggleDark={() => setDarkMode(d => !d)}
            />

            <p style={{ color: 'var(--text-secondary)' }}>
              Seção ativa:{' '}
              <strong style={{ color: 'var(--text-primary)' }}>
                {activeSectionId}
              </strong>
              {' '}— conteúdo MDX em breve.
            </p>
          </ContentArea>
        </div>

        <div style={{
          height: 2,
          background: 'var(--border)',
          flexShrink: 0,
        }}>
          <div style={{
            height: '100%',
            background: 'var(--accent)',
            width: `${progress}%`,
            transition: 'width 0.1s ease',
          }} />
        </div>
      </div>
    </div>
  )
}