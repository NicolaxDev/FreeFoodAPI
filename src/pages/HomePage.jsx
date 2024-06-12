import { JsonDisplay } from '../components/JsonDisplay'
import '../styles/HomePage.css'
import { TryURL } from '../components/TryURL';

export function HomePage(){
    const jsonData = {
        "category_id": 1,
        "cook_time": 20,
        "description": "Deliciosos pancakes con jarabe de arce.",
        "id": 1,
        "name": "Pancakes",
        "prep_time": 10,
        "servings": 4
      };
    return(
        <>
            <main className='contenedor-principal'>
                <div className='contenedor-principal-filtro'>
                    <h1>FreeFoodAPI</h1>
                    <p>Este es un servicio de API totalmente gratuito y de uso publico para la comunidad!.</p>
                    <div className='contenedor-principal-filtro-botones'>
                        <a>Ver Documentacion</a>
                        <a href='https://www.paypal.me/JSandoval865' target='_blank'>Apóyame</a>
                    </div>
                </div>
            </main>
            <article className='article-ejemplo-facil'>
                <div className='contenedor-breve-introduccion'>
                    <h2 className='contenedor-breve-introduccion-titulo'>FreeFoodAPI es intuitiva y facil de usar!!</h2>
                    <p className='contenedor-breve-introduccion-parrafo'>Para usar FreeFoodAPI no es necesario ser un experto</p>
                    <TryURL link='https://apifood-33iq.onrender.com/api/recetas' placeholder='apifood-33iq.onrender.com/api/recetas'/>
                </div>
                <div className='contenedor-ejemplo-request'>
                    <JsonDisplay data={jsonData} tittle={'JSON Request'}/>
                </div>
            </article>
        </>
    )
}