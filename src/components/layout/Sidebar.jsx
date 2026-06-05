import { clusters } from '../../data/papers.js'

export default function Sidebar({
  activePaperId, activeSectionId, onSelectSection, darkMode, onToggleDark,
}) {
  return (
    <nav style={{
      width: 220, flexShrink: 0, display: 'flex', flexDirection: 'column',
      borderRight: '0.5px solid var(--border)', background: 'var(--surface)',
      height: '100vh', overflow: 'hidden',
    }}>
      <div style={{
        padding: '16px 16px 12px',
        borderBottom: '0.5px solid var(--border)',
      }}>
        <div style={{
          fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 4,
        }}>
          Research app
        </div>
        <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>
          PLA Explorer
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 0' }}>
        {clusters.map(cluster => (
          <ClusterGroup
            key={cluster.id}
            cluster={cluster}
            activePaperId={activePaperId}
            activeSectionId={activeSectionId}
            onSelectSection={onSelectSection}
          />
        ))}
      </div>

      <div style={{
        padding: '12px 16px',
        borderTop: '0.5px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a
          href="https://vmnascimento.com"
          style={{ fontSize: '12px', color: 'var(--text-tertiary)', textDecoration: 'none' }}
        >
          ← Portfolio
        </a>

        <div style={{ display: 'flex', gap: 6 }}>
          <IconBtn onClick={onToggleDark} label="Toggle dark mode">
            {darkMode ? '○' : '◑'}
          </IconBtn>
          <IconBtn
            label="GitHub"
            onClick={() => window.open('https://github.com/vmnascimento/pla-explorer', '_blank')}
          >
            ↗
          </IconBtn>
        </div>
      </div>
    </nav>
  )
}

function ClusterGroup({ cluster, activePaperId, activeSectionId, onSelectSection }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{
        fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: 'var(--text-tertiary)',
        padding: '0 16px', marginBottom: 4,
      }}>
        {cluster.label}
      </div>

      {cluster.papers.map(paper => (
        <PaperEntry
          key={paper.id}
          paper={paper}
          isActive={paper.id === activePaperId}
          activeSectionId={activeSectionId}
          onSelectSection={onSelectSection}
        />
      ))}
    </div>
  )
}

function PaperEntry({ paper, isActive, activeSectionId, onSelectSection }) {
  return (
    <div>
      <div style={{
        padding: '8px 16px',
        borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent',
        background: isActive ? 'var(--accent-bg)' : 'transparent',
      }}>
        <div style={{
          fontSize: '11px', fontWeight: 500, letterSpacing: '0.04em',
          color: isActive ? 'var(--accent-text)' : 'var(--text-tertiary)',
        }}>
          arXiv {paper.arxivId}
        </div>
        <div style={{
          fontSize: '12px', lineHeight: 1.4, marginTop: 1,
          color: isActive ? 'var(--accent-text)' : 'var(--text-secondary)',
        }}>
          {paper.shortTitle}
        </div>
      </div>

      {isActive && (
        <div style={{ padding: '4px 0 8px' }}>
          {paper.sections.map((section, index) => {
            const sections = paper.sections
            const activeIndex = sections.findIndex(s => s.id === activeSectionId)
            const sectionIndex = index
            const isDone = sectionIndex < activeIndex
            const isActive = section.id === activeSectionId

            return (
              <button
                key={section.id}
                onClick={() => onSelectSection(section.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  width: '100%', padding: '4px 16px 4px 24px',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  fontSize: '12px', textAlign: 'left',
                  color: isActive
                    ? 'var(--accent-text)'
                    : isDone
                    ? 'var(--text-secondary)'
                    : 'var(--text-tertiary)',
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                <span style={{
                  width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                  background: isActive
                    ? 'var(--accent)'
                    : isDone
                    ? '#6EE7B7'
                    : 'var(--border)',
                  border: isDone ? '1px solid #6EE7B7' : 'none',
                }} />
                {section.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function IconBtn({ children, onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        width: 26, height: 26, borderRadius: 6,
        border: '0.5px solid var(--border)',
        background: 'transparent', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '13px', color: 'var(--text-tertiary)',
      }}
    >
      {children}
    </button>
  )
}