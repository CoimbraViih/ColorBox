import { motion } from 'framer-motion'

export default function NotebookCard({ character }) {
  return (
    <motion.div
      style={{
        position: 'relative',
        aspectRatio: '3/4',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        cursor: 'default',
      }}
      whileHover={{
        scale: 1.05,
        y: -6,
        borderColor: 'rgba(167,139,250,0.4)',
        boxShadow: '0 20px 60px rgba(124,58,237,0.35)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {character.image ? (
        <img
          src={character.image}
          alt={`Caderno para colorir ${character.name}`}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(236,72,153,0.3))',
        }}>
          <span style={{ fontSize: '2rem' }}>{character.emoji}</span>
        </div>
      )}

      {/* Bottom gradient overlay with name */}
      <div style={{
        position: 'absolute',
        inset: '0 0 0 0',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '6px',
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '9px',
          color: '#ffffff',
          lineHeight: 1.2,
          textShadow: '0 1px 4px rgba(0,0,0,0.8)',
        }}>
          {character.name}
        </span>
      </div>
    </motion.div>
  )
}
