import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Sidebar from './components/layout/Sidebar'
import MobileTopbar from './components/layout/MobileTopbar'
import PageHeader from './components/layout/PageHeader'
import ContentArea from './components/layout/ContentArea'
import ProseContent from './components/pla/ProseContent'
import { clusters, findPaper } from './data/papers.js'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activePaperId, setActivePaperId] = useState('2508-20861')
  const [activeSectionId, setActiveSectionId] = useState('introduction')
  const [progress, setProgress] = useState(0)
  const scrollRef = useRef(null)

  const paper = useMemo(
    () => findPaper(activePaperId) ?? clusters[0].papers[0],
    [activePaperId]
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    const total = scrollHeight - clientHeight
    setProgress(total > 0 ? (scrollTop / total) * 100 : 0)

    const sections = paper.sections
      .map(s => document.getElementById(`section-${s.id}`))
      .filter(Boolean)
    const threshold = scrollTop + 140
    let current = activeSectionId
    for (const node of sections) {
      if (node.offsetTop <= threshold) {
        current = node.id.replace('section-', '')
      }
    }
    if (current !== activeSectionId) setActiveSectionId(current)
  }, [paper, activeSectionId])

  const handleSelectSection = (id) => {
    setActiveSectionId(id)
    const scroller = scrollRef.current
    const node = document.getElementById(`section-${id}`)
    if (scroller && node) {
      scroller.scrollTo({ top: node.offsetTop - 88, behavior: 'smooth' })
    }
  }

  const handleSelectPaper = (id) => {
    setActivePaperId(id)
    const first = findPaper(id)?.sections[0]?.id ?? 'introduction'
    setActiveSectionId(first)
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const sidebarProps = {
    activePaperId, activeSectionId,
    onSelectSection: handleSelectSection,
    onSelectPaper: handleSelectPaper,
    darkMode, onToggleDark: () => setDarkMode(d => !d),
  }

  return (
    <div style={{
      display: 'flex', height: '100vh', overflow: 'hidden',
      background: 'var(--background)', fontFamily: "'Inter', sans-serif",
    }}>
      <div className="hidden md:flex">
        <Sidebar {...sidebarProps} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <MobileTopbar {...sidebarProps} />

        <div ref={scrollRef} onScroll={handleScroll} style={{ flex: 1, overflowY: 'auto' }}>
          <ContentArea>
            <PageHeader
              paper={paper}
              darkMode={darkMode}
              onToggleDark={() => setDarkMode(d => !d)}
            />
            <ProseContent paper={paper} />
          </ContentArea>
        </div>

        <div style={{ height: 3, background: 'var(--hairline)', flexShrink: 0 }}>
          <div style={{
            height: '100%', background: 'var(--brand)',
            width: `${progress}%`, transition: 'width 0.15s ease',
          }} />
        </div>
      </div>
    </div>
  )
}