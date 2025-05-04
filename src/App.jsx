import './sass/style.scss'
import NavBarComponent from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'

function App() {
  return (
    <>
      <NavBarComponent/>
      <ItemListContainer greeting="Hola pedrito"/>
    </>
  )
}

export default App
