import '../styles/HomePage.css'
export function HomePage(){
    return(
        <main className='contenedor-principal'>
            <div className='contenedor-principal-filtro'>
                <h1>FreeFoodAPI</h1>
                <p>Este es un servicio de API totalmente gratuito y de uso publico para la comunidad!.</p>
                <div className='contenedor-principal-filtro-botones'>
                <button>Ver Documentacion</button>
                <button>Apóyame</button>
                </div>
            </div>
        </main>
    )
}