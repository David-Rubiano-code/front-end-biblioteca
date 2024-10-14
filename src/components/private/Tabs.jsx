import { NavLink } from "react-router-dom";
import './Tabs.css'

export default function Tabs() {
    return (
        <nav id="tab-main" className="navbar fixed-start">
        <div className="container-fluid d-flex flex-column align-items-center">
            <ul className="nav nav-pills flex-column text-center">
                <NavLink
                    className="nav-link"
                    aria-current="page"
                    aria-label="Prestamos"
                    to="/home"
                >
                    <i className="fa-solid fa-book-open-reader fa-xl"></i>     
                </NavLink>
                <NavLink
                    className="nav-link"
                    aria-label="Gestion de usuarios"
                    to="/pr/usuarios"
                >
                    <i className="fa-solid fa-users fa-xl"></i>
                </NavLink>
                <NavLink
                    className="nav-link"
                    aria-label="Gestion libros"
                    to="/pr/libros"
                >
                    <i className="fa-solid fa-book-open fa-xl"></i>
                </NavLink>
                <NavLink
                    className="nav-link"
                    aria-label="Gestion de escritores"
                    to="/pr/canecas"
                >
                    <i className="fa-solid fa-pen fa-xl"></i>
                </NavLink>
                <NavLink
                    className="nav-link"
                    aria-label="Puntos"
                    to="/pr/puntaje"
                >
                   <i className="fa-solid fa-newspaper fa-xl"></i>
                </NavLink>
            </ul>
        </div>
    </nav>
    
        
    )
}
