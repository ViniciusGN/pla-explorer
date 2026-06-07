import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from './Sidebar'

export default function MobileTopbar(props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 48, padding: '0 16px', flexShrink: 0,
        borderBottom: '0.5px solid var(--hairline)',
        background: 'var(--surface)',
      }}
        className="md:hidden"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, background: 'var(--brand)' }} />
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
            PLA Explorer
          </span>
        </div>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          style={{
            width: 32, height: 32, borderRadius: 8,
            border: '0.5px solid var(--hairline)',
            background: 'transparent', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-secondary)',
          }}
        >
          <Menu size={16} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)',
                zIndex: 40,
              }}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              style={{
                position: 'fixed', top: 0, left: 0, bottom: 0,
                width: 280, zIndex: 50,
              }}
            >
              <div style={{ position: 'absolute', top: 12, right: -40 }}>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    width: 32, height: 32, borderRadius: 8,
                    border: '0.5px solid rgba(255,255,255,0.2)',
                    background: 'transparent', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff',
                  }}
                >
                  <X size={16} />
                </button>
              </div>
              <Sidebar
                {...props}
                onSelectSection={(id) => { props.onSelectSection(id); setOpen(false) }}
                onSelectPaper={(id) => { props.onSelectPaper(id); setOpen(false) }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}