
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";


import CartWidget from "./CartWidget"

const NavBarComponent = () =>{
    return(
        <header>
        <p class="descuentoHeader">
            ofertas del 15% de descuento con codigo promocional
        </p>
        <section class="navBar">
            <div class="logo">
                <a href="#">
                    <img src="./MessinaB.PNG" alt="Logo de mi sitio MESSINA"/>
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="./pages/hombres.html">
                                Hombre
                        </a>
                    </li>
                    <li>
                        <a href="./pages/mujeres.html">
                                Mujer
                        </a>
                    </li>
                    <li>
                        <a href="./pages/nosotros.html">
                            Nosotros
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Accesorios
                        </a>
                    </li>
                </ul>
            </nav>
            <ul class="iconosNavBar">
                <li>
                    <a href="#">
                        <IoIosSearch/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <CartWidget/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaUser />
                    </a>
                </li>
            </ul>
        </section>
    </header>
    )
}
export default NavBarComponent