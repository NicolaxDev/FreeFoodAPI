import '../styles/Docs.css'
import jsonData from '../docs/jsons.js'
import { JsonDisplay } from '../components/JsonDisplay'

export function Docs(){
    return(
        <article className='docs-article'>
            <h2 id='introduccion'>Introduccion</h2>
            <p><strong className='strong-documentacion'>FreeAPIFood</strong> nace para cubrir una necesidad personal, pero no solo quedo ahi, decidí traer el API a cualquiera que a necesite de manera gratuita y publica.</p>
            <p>La API dispone de mas de <strong className='strong-documentacion'>110 recetas</strong> y <strong className='strong-documentacion'>23 categorias</strong> junto con los <strong className='strong-documentacion'>ingredientes</strong> de cada receta, <strong className='strong-documentacion'>pasos</strong> para su elaboracion, <strong className='strong-documentacion'>tiempo</strong> de preparacion, y muy pronto <strong className='strong-documentacion'>imagenes</strong>.</p>
            <h2 id='formatoRequest'>Formato de request</h2>
            <p>Al momento de ralizar una <strong className='strong-documentacion'>peticion</strong> a la API nos devolvera un obejto de tipo <strong className='strong-documentacion'>JSON</strong> con la informacion que hayamos consultado, de esta forma:</p>

            <JsonDisplay data={jsonData} tittle={'Ejemplo JSON Request'}/>

            <p>Esta es una peticion sencilla hacia la API que nos devuelve la receta que corresponde al <strong className='strong-documentacion'>ID</strong> 1, este request contiene: </p>
            <div className='contenedor-lista'>
                <li>El ID de la <strong className='strong-documentacion'>categoria</strong> de la receta</li>
                <li>El <strong className='strong-documentacion'>tiempo de coccion</strong> de la receta</li>
                <li>Una breve <strong className='strong-documentacion'>descripcion</strong> de la receta</li>
                <li>El <strong className='strong-documentacion'>ID</strong> de la receta</li>
                <li>El <strong className='strong-documentacion'>nombre</strong> de la receta</li>
                <li>El <strong className='strong-documentacion'>tiempo de preparacion</strong> de la receta</li>
                <li>Las <strong className='strong-documentacion'>porciones</strong> de la receta</li>
            </div>
        </article>
    )
}