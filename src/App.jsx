
import NavBarComponent from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Prueba from './components/Prueba';
import Timer from './components/Timer'
import './App.css'

function App() {
  return (
    <>
    <div className='flex flex-col items-center'>
        <NavBarComponent/>
        <ItemListContainer greeting="Hola pedrito"/>
        <div className="rounded-b-full min-h-screen bg-gradient-to-br from-white to-purple-100 flex content-center items-center justify-center w-full">
          <Prueba/>
        </div>
        <Timer/>
    </div>
    </>
  )
}

export default App
