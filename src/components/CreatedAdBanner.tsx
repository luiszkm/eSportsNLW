import { MagnifyingGlassPlus } from "phosphor-react"



export function CreatedAdBanner() {

  return (
    <div className='pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden'>
      <div className='bg-[#2A2634] px-8 py-6 flex  items-center  justify-between'>
        <div>
          <strong className='text-2xl text-white block font-black'>Não encontrou seu duo?</strong>
          < span className='text-zinc-300 text block'>Publique um anúncio para encontrar novos players!</span>
        </div>
        <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  )
}