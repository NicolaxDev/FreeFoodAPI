import { JsonDisplay } from '../components/JsonDisplay'
import '../styles/HomePage.css'
import { TryURL } from '../components/TryURL';
import { ButtonPurple } from '../components/ButtonPurple';
import libroRceteas from '../assets/libro-de-cocina.png'
import { CardAPI } from '../components/CardAPI';
import key from '../assets/llave.png'
import httpIMG from '../assets/http.png'


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
                    <h1>FreeAPIFood</h1>
                    <p>Este es un servicio de API totalmente gratuito y de uso publico para la comunidad!.</p>
                    <div className='contenedor-principal-filtro-botones'>
                        <ButtonPurple link='/documentacion' texto='Ver documentacion' target={''}/>
                        <ButtonPurple link='https://www.paypal.me/JSandoval865' texto='Apóyame' target={'_blank'}/>
                    </div>
                </div>
            </main>
            <section className='section-api-offer'>
                <CardAPI imagen={libroRceteas} textoParrafo='El API cuenta con mas de <strong>110 recetas</strong> a las cuales puedes acceder de manera <strong>gratuita</strong>.'/>
                <CardAPI imagen={key} textoParrafo='<strong>No</strong> se requiere APIkey para usar <strong>FreeAPIFood</strong>'/>
                <CardAPI imagen={httpIMG} textoParrafo='<strong>Facil</strong> acceso a travez de metodos<strong>HTTP</strong>'/>
            </section>
            <article className='article-ejemplo-facil'>
                <div className='contenedor-breve-introduccion'>
                    <h2 className='contenedor-breve-introduccion-titulo'>FreeAPIFood es intuitiva y facil de usar!!</h2>
                    <p className='contenedor-breve-introduccion-parrafo'>Para usar <strong className='strong-article-ejemplo'>FreeAPIFood</strong> no es necesario ser un experto</p>
                    <TryURL link='https://apifood-33iq.onrender.com/api/recetas/id/1' placeholder='apifood-33iq.onrender.com/api/recetas/id/1'/>
                </div>
                <div className='contenedor-ejemplo-request'>
                    <JsonDisplay data={jsonData} tittle={'JSON Request'}/>
                </div>  
            </article>
            <section className='ultimate-section'>
                <h3>Inicia ahora a usar FreeFoodAPI</h3>
                <ButtonPurple link='' texto='ver documentacion'/>
            </section>
        </>
    )
}