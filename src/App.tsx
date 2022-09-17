import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css'
import logo from './assets/Logo.svg'
import image from './assets/game.png'

import { GamerBanner } from './components/GamerBanner'
import { CreatedAdBanner } from './components/CreatedAdBanner'
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/Input';

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
  console.log(games);

  useEffect(() => {
    fetch('http://localhost:3333/games')
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
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
          <Dialog.Content className='fixed bg-[#242634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>
              Publique um Anúncio
            </Dialog.Title>

            <form className='mt-8 flex flex-col gap-4'>

              <div className='flex flex-col gap-2 '>
                <label htmlFor="game" className='font-semibold'>
                  Qual o Game? </label>
                <Input id='' placeholder='selecione o game que deseja jogar' />

              </div>

              <div className='flex flex-col gap-2 '>
                <label htmlFor="name">Seu nome (ou nickName)</label>
                <Input type="text" id='name' placeholder='Como te Chamam dentro do game?' />
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2 '>
                  <label htmlFor="yearsPlaying">Joga a quanto tempo?</label>
                  <Input type="number" id="yearsPlaying" placeholder='tudo bem ser zero' />
                </div>
                <div className='flex flex-col gap-2 '>
                  <label htmlFor="discord">Qual o seu Discord?</label>
                  <Input type="text" id='discord' placeholder='Usuário#157' />
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <div className='grid grid-cols-4 gap-2'>

                    <button className='w-8 h-8 rounded bg-zinc-900'
                      title='Domingo'>D</button>
                    <button className='w-8 h-8 rounded bg-zinc-900'
                      title='Segunda'>S</button>
                    <button className='w-8 h-8 rounded bg-zinc-900'
                      title='Terça'>T</button>
                    <button className='w-8 h-8 rounded bg-zinc-900'
                      title='Quarta'>Q</button>
                    <button className='w-8 h-8 rounded bg-zinc-900'
                      title='Quinta'>Q</button>
                    <button className='w-8 h-8 rounded bg-zinc-900'
                      title='Sexta'>S</button>
                    <button className='w-8 h-8 rounded bg-zinc-900'
                      title='Sábado'>S</button>

                  </div>

                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="hoursStart">Qual o Horário do dia?</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <Input type="time" id="hoursStart" placeholder='De' />
                    <Input type="time" id="HoursEnd" placeholder='Até' />
                  </div>
                </div>
              </div>

              <div className='mt-2 flex gap-2 text-sm'>
                <Input type="checkbox" id="useVoiceChannel" />
                Costumo me conectar ao chat de voz
              </div>
              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                  Cancelar
                </Dialog.Close>

                <button className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                  type='submit'>
                  <GameController size={24} />
                  Encontrar Duo</button>
              </footer>

            </form>

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>




    </div>
  )
}

export default App
