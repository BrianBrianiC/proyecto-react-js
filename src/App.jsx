
import NavBarComponent from './components/NavBar';
import './App.css'
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';   //LLamamos al proveedor
function App() {
  return (
    <BrowserRouter>
        <CartProvider>
          <NavBarComponent />
          <AppRoutes/>
        </CartProvider>
    </BrowserRouter>
  );
}


export default App
