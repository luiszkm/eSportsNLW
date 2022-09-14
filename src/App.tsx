import './styles/main.css'
import logo from './assets/Logo.svg'
function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20' >
      <img src={logo} alt="" />
      <h1 className='text-6xl text-white font-black m-20' >
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6'>
        <a href="#">
          <img src="https://images.unsplash" alt="" />
        </a>

      </div>



    </div>
  )
}

export default App
