import { clusters } from '../../data/papers.js'

export default function Sidebar({ activePaperId, activeSectionId, onSelectSection }) {
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        padding: '16px 0',
        width: 240,
        flexShrink: 0,
        borderRight: '0.5px solid var(--border)',
        background: 'var(--surface)',
        height: '100%',
      }}
    >
      {clusters.map(cluster => (
        <div key={cluster.id} style={{ marginBottom: 8 }}>
          <p
            style={{
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--text-tertiary)',
              padding: '0 16px', marginBottom: 4,
            }}
          >
            {cluster.label}
          </p>

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
      ))}

      <div
        style={{
          marginTop: 'auto', margin: '0 16px',
          paddingTop: 12, borderTop: '0.5px solid var(--border)',
        }}
      >
        <a
          href="https://vmnascimento.com"
          style={{ fontSize: '12px', color: 'var(--text-tertiary)', textDecoration: 'none' }}
        >
          ← vmnascimento.com
        </a>
      </div>
    </nav>
  )
}

function PaperEntry({ paper, isActive, activeSectionId, onSelectSection }) {
  return (
    <div>
      <div
        style={{
          padding: '8px 16px',
          borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent',
          background: isActive ? 'var(--accent-bg)' : 'transparent',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.04em',
            color: isActive ? 'var(--accent-text)' : 'var(--text-tertiary)',
          }}
        >
          arXiv {paper.arxivId}
        </span>
        <p
          style={{
            fontSize: '13px', lineHeight: 1.4,
            color: isActive ? 'var(--accent-text)' : 'var(--text-secondary)',
          }}
        >
          {paper.shortTitle}
        </p>
      </div>

      {isActive && (
        <div style={{ paddingBottom: 8 }}>
          {paper.sections.map(section => (
            <button
              key={section.id}
              onClick={() => onSelectSection(section.id)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '3px 24px', fontSize: '12px',
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: activeSectionId === section.id
                  ? 'var(--accent-text)' : 'var(--text-tertiary)',
                fontWeight: activeSectionId === section.id ? 500 : 400,
              }}
            >
              {activeSectionId === section.id ? '› ' : ''}{section.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}