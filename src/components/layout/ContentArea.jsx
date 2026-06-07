export default function ContentArea({ children }) {
  return (
    <div style={{
      maxWidth: 760, margin: '0 auto',
      padding: '24px 40px 96px',
    }}>
      {children}
    </div>
  )
} 