
import NavBarComponent from './components/NavBar';
import Timer from './components/Timer'
import './App.css'
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  //NO SE RECOMIENDA TENER DIV'S O CONTENEDORES CON ESTILOS EN APP
  return (
    <BrowserRouter>
        <NavBarComponent />
        <AppRoutes/>
        <Timer />
        {/* <Footer/> */}
    </BrowserRouter>
  );
}


export default App
