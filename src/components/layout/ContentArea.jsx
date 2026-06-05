export default function ContentArea({ children }) {
  return (
    <main style={{ flex: 1, overflowY: 'auto', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '32px 32px 64px' }}>
        {children}
      </div>
    </main>
  )
}
