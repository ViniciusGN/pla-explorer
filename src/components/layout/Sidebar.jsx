import { ArrowLeft, ExternalLink, Moon, Sun } from 'lucide-react'
import { clusters } from '../../data/papers.js'

export default function Sidebar({
  activePaperId, activeSectionId,
  onSelectSection, onSelectPaper,
  darkMode, onToggleDark,
}) {
  return (
    <aside style={{
      width: 260, flexShrink: 0, display: 'flex', flexDirection: 'column',
      borderRight: '0.5px solid var(--hairline)', background: 'var(--surface)',
      height: '100vh', overflow: 'hidden',
    }}>
      <div style={{
        padding: '24px 20px 20px',
        borderBottom: '0.5px solid var(--hairline)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <div style={{
            width: 16, height: 16, borderRadius: 3,
            background: 'var(--brand)', flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'monospace', fontSize: '10px', textTransform: 'uppercase',
            letterSpacing: '0.14em', color: 'var(--text-tertiary)',
          }}>
            Research app
          </span>
        </div>
        <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>
          PLA Explorer
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: 2 }}>
          Reproducing physical-layer authentication papers.
        </div>
      </div>

      <nav style={{ flex: 1, overflowY: 'auto', padding: '16px 12px' }}>
        {clusters.map(cluster => (
          <div key={cluster.id} style={{ marginBottom: 28 }}>
            <div style={{
              padding: '0 12px', marginBottom: 8,
              fontFamily: 'monospace', fontSize: '10px',
              textTransform: 'uppercase', letterSpacing: '0.14em',
              color: 'var(--text-tertiary)',
            }}>
              {cluster.label}
            </div>
            <ul style={{ listStyle: 'none' }}>
              {cluster.papers.map(paper => (
                <PaperEntry
                  key={paper.id}
                  paper={paper}
                  isActive={paper.id === activePaperId}
                  activeSectionId={activeSectionId}
                  onSelectPaper={onSelectPaper}
                  onSelectSection={onSelectSection}
                />
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div style={{
        padding: '12px 16px',
        borderTop: '0.5px solid var(--hairline)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        
        <a href="https://vmnascimento.com"
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'none',
          }}
        >
          <ArrowLeft size={13} />
          Portfolio
        </a>
        <div style={{ display: 'flex', gap: 4 }}>
          <IconBtn label="Toggle theme" onClick={onToggleDark}>
            {darkMode ? <Sun size={13} /> : <Moon size={13} />}
          </IconBtn>
          <IconBtn
            label="GitHub"
            onClick={() => window.open('https://github.com/vmnascimento/pla-explorer', '_blank')}
          >
            <ExternalLink size={13} />
          </IconBtn>
        </div>
      </div>
      </aside>
  )
}

function PaperEntry({ paper, isActive, activeSectionId, onSelectPaper, onSelectSection }) {
  return (
    <li style={{ marginBottom: 2 }}>
      <button
        onClick={() => onSelectPaper(paper.id)}
        style={{
          width: '100%', textAlign: 'left', padding: '6px 12px',
          borderRadius: 8, border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: '13px', background: 'transparent',
          color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
          fontWeight: isActive ? 500 : 400,
        }}
      >
        <span style={{
          width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
          background: isActive ? 'var(--brand)' : 'transparent',
          border: isActive ? 'none' : '1px solid var(--hairline)',
        }} />
        <span style={{
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {paper.shortTitle}
        </span>
      </button>

      {isActive && (
        <ul style={{
          listStyle: 'none', marginTop: 4,
          marginLeft: 18, paddingLeft: 12,
          borderLeft: '0.5px solid var(--hairline)',
        }}>
          {paper.sections.map(section => (
            <SectionLink
              key={section.id}
              section={section}
              isActive={section.id === activeSectionId}
              onSelect={() => onSelectSection(section.id)}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

function SectionLink({ section, isActive, onSelect }) {
  return (
    <li style={{ position: 'relative' }}>
      {isActive && (
        <span style={{
          position: 'absolute', left: -13,
          top: '50%', transform: 'translateY(-50%)',
          width: 1, height: 16,
          background: 'var(--brand)',
        }} />
      )}
      <button
        onClick={onSelect}
        style={{
          display: 'block', width: '100%', textAlign: 'left',
          padding: '4px 8px', borderRadius: 6,
          border: 'none', cursor: 'pointer', background: 'transparent',
          fontSize: '12.5px',
          color: isActive ? 'var(--brand)' : 'var(--text-tertiary)',
          fontWeight: isActive ? 500 : 400,
        }}
      >
        {section.label}
      </button>
    </li>
  )
}

function IconBtn({ children, onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        width: 28, height: 28, borderRadius: 6,
        border: '0.5px solid var(--hairline)',
        background: 'transparent', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--text-tertiary)',
      }}
    >
      {children}
    </button>
  )
}