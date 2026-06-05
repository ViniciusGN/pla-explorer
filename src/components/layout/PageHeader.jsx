export default function PageHeader({ darkMode, onToggleDark }) {
  const tags = [
    'Physical Layer Authentication',
    'CSI Fingerprinting',
    'Siamese CNN',
    'IEEE 802.11n',
    'WLAN TGn',
  ]

  return (
    <div style={{
      border: '0.5px solid var(--border)', borderRadius: 12,
      background: 'var(--surface)', padding: '20px 24px', marginBottom: 32,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--text-tertiary)',
            }}>
              Vinícius Nascimento
            </span>
            <span style={{ color: 'var(--border)' }}>·</span>
            <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
              AI & Cybersecurity Research
            </span>
          </div>

          <div style={{ fontSize: '17px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: 4 }}>
            Physical Layer Authentication with AI
          </div>

          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Interactive study of CSI-based authentication using deep learning.
            Simulations, theory and reproducible results.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6, marginLeft: 16, flexShrink: 0 }}>
          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            style={{
              width: 30, height: 30, borderRadius: 8,
              border: '0.5px solid var(--border)',
              background: 'transparent', cursor: 'pointer',
              fontSize: '14px', color: 'var(--text-tertiary)',
            }}
          >
            {darkMode ? '○' : '◑'}
          </button>

          <a
            href="https://github.com/vmnascimento/pla-explorer"
            target="_blank"
            rel="noreferrer"
            style={{
              width: 30, height: 30, borderRadius: 8,
              border: '0.5px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '13px', color: 'var(--text-tertiary)', textDecoration: 'none',
            }}
          >
            ↗
          </a>
        </div>
      </div>

      <div style={{
        borderTop: '0.5px solid var(--border)',
        paddingTop: 12,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        alignItems: 'center',
      }}>
        {tags.map(tag => (
          <span
            key={tag}
            style={{
              fontSize: '11px', padding: '2px 10px', borderRadius: 99,
              border: '0.5px solid var(--border)',
              color: 'var(--text-tertiary)', background: 'transparent',
            }}
          >
            {tag}
          </span>
        ))}

        <a
          href="https://vmnascimento.com"
          style={{
            marginLeft: 'auto', fontSize: '11px', fontWeight: 500,
            padding: '3px 10px', borderRadius: 99,
            border: '0.5px solid var(--accent-border)',
            color: 'var(--accent-text)', background: 'var(--accent-bg)',
            textDecoration: 'none',
          }}
        >
          ↗ vmnascimento.com
        </a>
      </div>
    </div>
  )
}