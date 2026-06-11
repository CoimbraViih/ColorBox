import CtaButton from '../ui/CtaButton'
import CharacterCard from '../ui/CharacterCard'
import { CHARACTERS } from '../../constants/characters'

export default function CharactersSection() {
  return (
    <section className="bg-white px-5 py-12 font-sans sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <span className="rounded-full bg-brand-purple/10 px-5 py-2 text-sm font-bold text-brand-purple">
          🎨 Olha tudo que vem no ColorBox
        </span>

        <h2 className="mt-4 text-balance text-center text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
          São <span className="text-brand-pink">30 cadernos</span> com os
          personagens favoritos das crianças
        </h2>

        <p className="mt-3 max-w-2xl text-balance text-center text-base font-semibold text-gray-600 sm:text-lg">
          Centenas de desenhos em PDF prontos para imprimir — em casa ou na
          gráfica, quantas vezes quiser.
        </p>

        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CHARACTERS.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-bold text-gray-800">
          Tudo isso por apenas{' '}
          <span className="text-cta-green">R$37</span> — pagamento único 👇
        </p>

        <div className="mt-4 w-full max-w-md">
          <CtaButton />
        </div>
      </div>
    </section>
  )
}
