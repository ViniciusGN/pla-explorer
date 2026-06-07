import { ArrowLeft, ExternalLink, Moon, Sun } from 'lucide-react'

export default function PageHeader({ paper, darkMode, onToggleDark }) {
  if (!paper) return null

  return (
    <header style={{
      position: 'relative', overflow: 'hidden',
      borderRadius: 16, border: '0.5px solid var(--hairline)',
      background: 'var(--surface)', marginBottom: 48,
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,inset: '0 0 auto 0',
        height: 3, background: 'var(--brand)',
      }} />

      <div style={{ padding: '32px 32px 28px' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'flex-start', justifyContent: 'space-between',
          gap: 12, marginBottom: 20,
        }}>
          <div style={{
            fontFamily: 'monospace', fontSize: '10.5px',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            color: 'var(--text-tertiary)', lineHeight: 1.6,
          }}>
            <span style={{ color: 'var(--text-secondary)' }}>{paper.authors}</span>
            <span style={{ margin: '0 8px', color: 'var(--hairline)' }}>·</span>
            <span>AI & Cybersecurity Research</span>
            <span style={{ margin: '0 8px', color: 'var(--hairline)' }}>·</span>
            <span>{paper.year}</span>
          </div>

          <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
            <HeaderBtn onClick={onToggleDark} label="Toggle theme">
              {darkMode ? <Sun size={13} /> : <Moon size={13} />}
              <span>{darkMode ? 'Light' : 'Dark'}</span>
            </HeaderBtn>
            <HeaderBtn
              label="GitHub"
              onClick={() => window.open('https://github.com/vmnascimento/pla-explorer', '_blank')}
            >
              <ExternalLink size={13} />
              <span>GitHub</span>
            </HeaderBtn>
            <HeaderBtn
              label="Portfolio"
              onClick={() => window.location.href = 'https://vmnascimento.com'}
            >
              <ArrowLeft size={13} />
              <span>Portfolio</span>
            </HeaderBtn>
          </div>
        </div>

        <h1 style={{
          fontSize: '26px', fontWeight: 600, letterSpacing: '-0.015em',
          lineHeight: 1.2, color: 'var(--text-primary)', maxWidth: '34ch',
          marginBottom: 12,
        }}>
          {paper.fullTitle}
        </h1>

        <p style={{
          fontSize: '14.5px', lineHeight: 1.65,
          color: 'var(--text-secondary)', maxWidth: '60ch',
        }}>
          {paper.subtitle}
        </p>

        <div style={{
          marginTop: 24, paddingTop: 20,
          borderTop: '0.5px solid var(--hairline)',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', gap: 6,
        }}>
          <span style={{
            fontFamily: 'monospace', fontSize: '10px',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            color: 'var(--text-tertiary)', marginRight: 4,
          }}>
            Topics
          </span>
          {paper.tags.map(tag => (
            <a
              key={tag}
              href={`https://vmnascimento.com/?tag=${encodeURIComponent(tag)}`}
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '2px 10px', borderRadius: 99,
                fontFamily: 'monospace', fontSize: '10px',
                textTransform: 'uppercase', letterSpacing: '0.1em',
                color: 'var(--text-secondary)',
                background: 'color-mix(in oklab, var(--hairline) 40%, transparent)',
                textDecoration: 'none',
              }}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

function HeaderBtn({ children, onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        height: 28, padding: '0 10px', borderRadius: 8,
        border: '0.5px solid var(--hairline)',
        background: 'transparent', cursor: 'pointer',
        fontSize: '11.5px', fontWeight: 500,
        color: 'var(--text-secondary)',
      }}
    >
      {children}
    </button>
  )
}