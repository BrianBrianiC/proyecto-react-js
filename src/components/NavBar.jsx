
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";


import CartWidget from "./CartWidget"

const NavBarComponent = () =>{
    return(
        <header className="w-full flex flex-col text-center">
        <p className="text-white bg-black w-full">
            ofertas del 15% de descuento con codigo promocional
        </p>
        <section className="flex justify-between items-center w-full h-16 bg-amber-50 ">
            <div className="logo">
                <a href="#">
                    <img src="./MessinaB.PNG" alt="Logo de mi sitio MESSINA"/>
                </a>
            </div>
            <nav className="">
                <ul className="flex justify-between items-center w-2xl">
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
            <ul className="iconosNavBar flex justify-between w-3xs">
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