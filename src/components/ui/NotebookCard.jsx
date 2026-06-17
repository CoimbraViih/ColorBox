import { motion } from 'framer-motion'

export default function NotebookCard({ character, index = 0 }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl"
      style={{
        aspectRatio: '3/4',
        border: '1px solid rgba(167,139,250,0.25)',
        boxShadow: 'inset 0 0 12px rgba(124,58,237,0.15)',
      }}
      whileHover={{
        scale: 1.07,
        boxShadow: '0 0 24px rgba(167,139,250,0.5), inset 0 0 12px rgba(124,58,237,0.2)',
        zIndex: 10,
      }}
      transition={{ duration: 0.2 }}
    >
      {character.image ? (
        <img
          src={character.image}
          alt={`Caderno para colorir ${character.name}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-1"
          style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(219,39,119,0.3))' }}
        >
          <span className="text-3xl">{character.emoji}</span>
        </div>
      )}
      <div
        className="absolute inset-x-0 bottom-0 flex items-end p-1.5"
        style={{ background: 'linear-gradient(to top, rgba(15,10,30,0.9) 0%, transparent 60%)' }}
      >
        <span className="text-[9px] font-bold leading-tight text-white drop-shadow">
          {character.name}
        </span>
      </div>
    </motion.div>
  )
}
