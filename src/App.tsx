import './styles/main.css'
import logo from './assets/Logo.svg'
import image from './assets/game.png'

import { MagnifyingGlassPlus } from "phosphor-react"


function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20' >
      <img src={logo} alt="" />
      <h1 className='text-6xl text-white font-black m-20' >
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        <a href="#" className=' relative rounded-lg overflow-hidden'>
          <img src={image} alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 '>
            <strong className='font-bold text-white block'>dota 2</strong>
            <span className='text-zinc-300 text-sm block '>anúncios</span>
          </div>
        </a>

        <a href="#" className=' relative rounded-lg overflow-hidden'>
          <img src={image} alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 '>
            <strong className='font-bold text-white block'>dota 2</strong>
            <span className='text-zinc-300 text-sm block '>anúncios</span>
          </div>
        </a>
        <a href="#" className=' relative rounded-lg overflow-hidden'>
          <img src={image} alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 '>
            <strong className='font-bold text-white block'>dota 2</strong>
            <span className='text-zinc-300 text-sm block '>anúncios</span>
          </div>
        </a>
        <a href="#" className=' relative rounded-lg overflow-hidden'>
          <img src={image} alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 '>
            <strong className='font-bold text-white block'>dota 2</strong>
            <span className='text-zinc-300 text-sm block '>anúncios</span>
          </div>
        </a>


      </div>

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



    </div>
  )
}

export default App
