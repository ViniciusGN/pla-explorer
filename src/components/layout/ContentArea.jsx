export default function ContentArea({ children }) {
  return (
    <main style={{ flex: 1, overflowY: 'auto', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 32px' }}>
        {children}
      </div>
    </main>
  )
}
