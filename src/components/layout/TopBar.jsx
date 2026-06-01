import { Sun, Moon, Github, ArrowLeft } from 'lucide-react'

export default function TopBar({ darkMode, onToggleDark }) {
  return (
    <header
      className="flex items-center justify-between px-5 h-12 flex-shrink-0"
      style={{ borderBottom: '0.5px solid var(--border)', background: 'var(--surface)' }}
    >
      <div className="flex items-center gap-2">
        <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
          PLA Explorer
        </span>
        <span
          style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--text-secondary)',
            border: '0.5px solid var(--border)', borderRadius: 8,
            padding: '2px 8px',
          }}
        >
          Research
        </span>
      </div>

      <div className="flex items-center gap-2">
        <IconBtn onClick={onToggleDark} label="Toggle dark mode">
          {darkMode ? <Sun size={15} /> : <Moon size={15} />}
        </IconBtn>
        <IconBtn
          label="GitHub"
          onClick={() => window.open('https://github.com/vmnascimento/pla-explorer', '_blank')}
        >
          <Github size={15} />
        </IconBtn>
        <IconBtn
          label="Back to CV"
          onClick={() => window.location.href = 'https://vmnascimento.com'}
        >
          <ArrowLeft size={15} />
        </IconBtn>
      </div>
    </header>
  )
}

function IconBtn({ children, onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 32, height: 32, borderRadius: 8,
        border: '0.5px solid var(--border)',
        color: 'var(--text-secondary)', background: 'transparent', cursor: 'pointer',
      }}
    >
      {children}
    </button>
  )
}
