
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBarComponent = () => {
    return (
        <header className="sticky top-0 bg-white shadow z-50 flex flex-col text-center">
            <p className="text-white bg-black w-full">
                ofertas del 15% de descuento con código promocional
            </p>
            <section className="flex justify-between items-center w-full h-16 p-8 bg-white border border-black">
                <div className=" w-[7.5rem] h-[3.625rem] flex items-center object-contain">
                    <NavLink to='/'>
                        <img src="/MessinaB.PNG" alt="Logo de mi sitio MESSINA" />
                    </NavLink>
                </div>
                <nav>
                    <ul className="flex justify-center items-center gap-4 text-[0.875rem]">
                        <li>
                            <NavLink to='/category/Hombres'>HOMBRES</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/Mujeres'>MUJERES</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/Nosotros'>NOSOTROS</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>ACCESORIOS</NavLink>
                        </li>
                    </ul>
                </nav>
                <ul className="iconosNavBar flex justify-center gap-6 ">
                    <li>
                        <a href="#">
                            <IoIosSearch />
                        </a>
                    </li>
                    <li>
                        <NavLink to='/cart'>
                            <CartWidget />
                        </NavLink>
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
