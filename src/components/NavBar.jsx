import icon from '../../public/FreeAPIFood_logo.webp';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

export function NavBar() {
    return (
        <header className='header-navbar'>
            <img className='header-navbar-img' src={icon} alt="Icono API" />
            <nav className='header-navbar-contenedor-links'>
                <NavLink to='/' className={({ isActive }) => isActive ? 'header-navbar-contenido-link active' : 'header-navbar-contenido-link'}>Inicio</NavLink>
                <NavLink to='/documentacion' className={({ isActive }) => isActive ? 'header-navbar-contenido-link active' : 'header-navbar-contenido-link'}>Documentación</NavLink>
                <NavLink to='/soporte' className={({ isActive }) => isActive ? 'header-navbar-contenido-link active' : 'header-navbar-contenido-link'}>Soporte</NavLink>
            </nav>
        </header>
    );
}
