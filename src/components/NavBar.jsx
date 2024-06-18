import icon from '../../public/FreeAPIFood_logo.webp';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export function NavBar() {
    return (
        <header className='header-navbar'>
            <img className='header-navbar-img' src={icon} alt="Icono API" />
            <nav className='header-navbar-contenedor-links'>
                <Link to='/' className={({ isActive }) => isActive ? 'header-navbar-contenido-link active' : 'header-navbar-contenido-link'}>Inicio</Link>
                <Link to='/documentacion' className={({ isActive }) => isActive ? 'header-navbar-contenido-link active' : 'header-navbar-contenido-link'}>Documentación</Link>
                {/* <Link to='/soporte' className={({ isActive }) => isActive ? 'header-navbar-contenido-link active' : 'header-navbar-contenido-link'}>Soporte</Link> */}
            </nav>
        </header>
    );
}
