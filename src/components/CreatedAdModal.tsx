import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';


import { Check, GameController } from 'phosphor-react';

import { Input } from "./Form/Input";
import { useEffect, useState } from 'react';

const baseURL = import.meta.env.VITE_LINK_API;

interface Game {
  id: string;
  title: string;
}

export function CreatedAdModal() {
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])



  useEffect(() => {
    fetch(`${baseURL}/games`)
      .then(response => response.json())
      .then(data => {
        setGames(data)

      })
  }, [])
  return (
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
            <select id='game'
              className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
              defaultValue=''
            >
              <option
                value="">selecione o game que deseja jogar</option>

              {
                games.map(game => {
                  return <option key={String(game.id)} value={game.id}>{game.title}</option>
                })
              }
            </select>

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

              <ToggleGroup.Root
                type='multiple'
                className='grid grid-cols-4 gap-2'
                value={weekDays}
                onValueChange={setWeekDays}>

                <ToggleGroup.Item
                  className={`w-8 h-8 rounded  ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                  value='0'
                  title='Domingo'>D
                </ToggleGroup.Item >

                <ToggleGroup.Item className={`w-8 h-8 rounded  ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                  value='1'
                  title='Segunda'>S
                </ToggleGroup.Item >

                <ToggleGroup.Item className={`w-8 h-8 rounded  ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                  value='2'
                  title='Terça'>T
                </ToggleGroup.Item >

                <ToggleGroup.Item className={`w-8 h-8 rounded  ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                  value='3'
                  title='Quarta'>Q
                </ToggleGroup.Item >

                <ToggleGroup.Item className={`w-8 h-8 rounded  ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                  value='4'
                  title='Quinta'>Q
                </ToggleGroup.Item >

                <ToggleGroup.Item className={`w-8 h-8 rounded  ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                  value='5'
                  title='Sexta'>S
                </ToggleGroup.Item >

                <ToggleGroup.Item className={`w-8 h-8 rounded  ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                  value='6'
                  title='Sábado'>S
                </ToggleGroup.Item >

              </ToggleGroup.Root>


            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="hoursStart">Qual o Horário do dia?</label>
              <div className='grid grid-cols-2 gap-2'>
                <Input type="time" id="hoursStart" placeholder='De' />
                <Input type="time" id="HoursEnd" placeholder='Até' />
              </div>
            </div>
          </div>

          <label className='mt-2 flex gap-2 text-sm items-center'>
            <Checkbox.Root className='w-6 h-6 p-1 rounded bg-zinc-900 '>
              <Checkbox.Indicator >
                <Check className='w-4 h-4 text-emerald-400' />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

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
  )
}