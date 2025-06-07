
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBarComponent = () => {
    return (
        <header className="w-full flex flex-col text-center">
            <p className="text-white bg-black w-full">
                ofertas del 15% de descuento con código promocional
            </p>
            <section className="flex justify-between items-center w-full h-16 bg-amber-50">
                <div className="logo">
                    <a href='#'>
                        <img src="./MessinaB.PNG" alt="Logo de mi sitio MESSINA" />
                    </a>
                </div>
                <nav>
                    <ul className="flex justify-between items-center w-2xl">
                        <li>
                            <NavLink to='/category/Hombres'>Hombres</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/Mujeres'>Mujer</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/Nosotros'>Nosotros</NavLink>
                        </li>
                    </ul>
                </nav>
                <ul className="iconosNavBar flex justify-between w-3xs">
                    <li>
                        <a href="#">
                            <IoIosSearch />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <CartWidget />
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
    );
};

export default NavBarComponent;
