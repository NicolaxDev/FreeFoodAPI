import '../styles/AsideNavDoc.css'

export function AsideNavDoc(){
    return(
        <aside className='aside-contenedor'>
            <span>Que es FreeAPIFood</span>
            <nav>
                <li className='li-nav-margin'><a href='#introduccion'>Introduccion</a></li>
                <li><a href='#baseURL'>Base URL</a></li>
            </nav>
            <span>Como empezar</span>
            <nav>
                <li><a href="#formatoRequest">formato de request</a></li>
            </nav>
            <span>Metodos GET</span>
            <nav>
                <li className='li-nav-margin'><a href="#obtenerTodasRecetas">Obtener todas las recetas</a></li>
                <li className='li-nav-margin'><a href="#obtenerRecetasLimite">Obtener cantidad determinada de recetas</a></li>
                <li className='li-nav-margin'><a href="#obtenerRecetasRandom">Obtener recetas random</a></li>
                <li className='li-nav-margin'><a href="#buscarRecetasNombre">Buscar recetas por nombre</a></li>
                <li className='li-nav-margin'><a href="#buscarRecetasID">Buscar recetas por ID</a></li>
                <li className='li-nav-margin'><a href="#buscarRecetasCategoria">Buscar recetas por categoria</a></li>
                <li className='li-nav-margin'><a href="#obtenerTodasCategorias">Obtener todas las categorias</a></li>
                <li className='li-nav-margin'><a href="#buscarCategoriaNombre">Buscar categoria por nombre</a></li>
                <li className='li-nav-margin'><a href="#buscarRecetaIngrediente">Buscar recetas por ingrediente</a></li>
                <li className='li-nav-margin'><a href="#buscarRecetaTiempo">Buscar recetas por tiempo de preparacion</a></li>
                <li className='li-nav-margin'><a href="#obtenerRecetaSimilares">Obtener recetas similares</a></li>
                <li className='li-nav-margin'><a href="#obtenerIngredientesReceta">Obtener ingredientes de una receta</a></li>
                <li><a href="#obtenerInstruccionesReceta">Obtener instrucciones de preparacion</a></li>
            </nav>
        </aside>
    )
}