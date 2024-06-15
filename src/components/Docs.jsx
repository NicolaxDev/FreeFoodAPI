import '../styles/Docs.css'
import jsonData from '../docs/jsons.js'
import { JsonDisplay } from '../components/JsonDisplay'

export function Docs(){
    return(
        <article className='docs-article'>
            <h2>Introduccion</h2>
            <p><strong className='strong-documentacion'>FreeAPIFood</strong> nace para cubrir una necesidad personal, pero no solo quedo ahi, decidí traer el API a cualquiera que a necesite de manera gratuita y publica.</p>
            <p>La API dispone de mas de <strong className='strong-documentacion'>110 recetas</strong> y <strong className='strong-documentacion'>23 categorias</strong> junto con los <strong className='strong-documentacion'>ingredientes</strong> de cada receta, <strong className='strong-documentacion'>pasos</strong> para su elaboracion, <strong className='strong-documentacion'>tiempo</strong> de preparacion, y muy pronto <strong className='strong-documentacion'>imagenes</strong>.</p>
            <h2>Formato de request</h2>
            <p>Al momento de ralizar una <strong className='strong-documentacion'>peticion</strong> a la API nos devolvera un obejto de tipo <strong className='strong-documentacion'>JSON</strong> con la informacion que hayamos consultado, de esta forma.</p>
            <JsonDisplay data={jsonData} tittle={'Ejemplo JSON Request'}/>
        </article>
    )
}