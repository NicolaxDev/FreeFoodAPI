import '../styles/AsideNavDoc.css'

export function AsideNavDoc(){
    return(
        <aside className='aside-contenedor'>
            <span>Que es FreeAPIFood</span>
            <nav>
                <li><a href=''>Introduccion</a></li>
            </nav>
            <span>Como empezar</span>
            <nav>
                <li><a href="">formato de request</a></li>
            </nav>
            <span>Metodos GET</span>
            <nav>
                <li className='li-nav-margin'><a href="#introduccion">Obtener todas las recetas</a></li>
                <li className='li-nav-margin'><a href="#formatoRequest">Obtener cantidad determinada de recetas</a></li>
                <li className='li-nav-margin'><a href="">Obtener recetas random</a></li>
                <li className='li-nav-margin'><a href="">Buscar recetas por nombre</a></li>
                <li className='li-nav-margin'><a href="">Buscar recetas por ID</a></li>
                <li className='li-nav-margin'><a href="">Buscar recetas por categoria</a></li>
                <li className='li-nav-margin'><a href="">Obtener todas las categorias</a></li>
                <li className='li-nav-margin'><a href="">Buscar categoria por nombre</a></li>
                <li className='li-nav-margin'><a href="">Buscar recetas por ingrediente</a></li>
                <li className='li-nav-margin'><a href="">Buscar recetas por tiempo de preparacion</a></li>
                <li className='li-nav-margin'><a href="">Obtener ingredientes de una receta</a></li>
                <li className='li-nav-margin'><a href="">Obtener instrucciones de preparacion</a></li>
            </nav>
        </aside>
    )
}