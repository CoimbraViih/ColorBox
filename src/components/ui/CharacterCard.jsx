export default function CharacterCard({ character }) {
  return (
    <div
      className={`${character.bg} flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-2xl border-4 border-white p-3 shadow-xl shadow-black/20 transition-transform duration-200 hover:scale-105`}
    >
      {character.image ? (
        <img
          src={character.image}
          alt={`Caderno de colorir ${character.name}`}
          loading="lazy"
          className="h-full w-full rounded-xl object-cover"
        />
      ) : (
        <>
          <span aria-hidden="true" className="text-4xl sm:text-5xl">
            {character.emoji}
          </span>
          <span className="text-center text-xs font-extrabold leading-tight text-white drop-shadow sm:text-sm">
            {character.name}
          </span>
        </>
      )}
    </div>
  )
}
