import { useState, useEffect } from 'react'
import TopBar from './components/layout/TopBar'
import Sidebar from './components/layout/Sidebar'
import ContentArea from './components/layout/ContentArea'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activePaperId] = useState('2508-20861')
  const [activeSectionId, setActiveSectionId] = useState('introduction')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column',
        height: '100vh', background: 'var(--surface)',
      }}
    >
      <TopBar darkMode={darkMode} onToggleDark={() => setDarkMode(d => !d)} />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar
          activePaperId={activePaperId}
          activeSectionId={activeSectionId}
          onSelectSection={setActiveSectionId}
        />
        <ContentArea>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
            Seção ativa: <strong style={{ color: 'var(--text-primary)' }}>{activeSectionId}</strong>
            {' '} conteúdo MDX em breve.
          </p>
        </ContentArea>
      </div>
    </div>
  )
}
