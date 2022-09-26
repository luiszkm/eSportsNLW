import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

const baseURL = import.meta.env.VITE_LINK_API;
import './styles/main.css'
import logo from './assets/Logo.svg'
import image from './assets/game.png'

import { GamerBanner } from './components/GamerBanner'
import { CreatedAdBanner } from './components/CreatedAdBanner'
import { CreatedAdModal } from './components/CreatedAdModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {

    fetch(`${baseURL}/games`)
      .then(response => response.json())
      .then(data => {
        setGames(data)

      })
  }, [])
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20' >
      <img src={logo} alt="" />
      <h1 className='text-6xl text-white font-black m-20' >
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {
          games.map(game => {
            return (
              <GamerBanner
                key={String(game.id)}
                title={game.title}
                adsCount={game._count.ads}
                bannerUrl={game.bannerUrl}
              />
            )
          })
        }


      </div>
      <Dialog.Root>
        <CreatedAdBanner />
        <CreatedAdModal />
      </Dialog.Root>




    </div>
  )
}

export default App
