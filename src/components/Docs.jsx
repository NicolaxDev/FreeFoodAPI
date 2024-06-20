import '../styles/Docs.css'
import {request, ingredientes, instrucciones} from '../docs/jsons.js'
import { JsonDisplay } from '../components/JsonDisplay'
import { MetodosGET } from './MetodosGET.jsx'

export function Docs(){
    return(
        <article className='docs-article'>
            <h2 id='introduccion'>Introduccion</h2>
            <p><strong className='strong-documentacion'>FreeAPIFood</strong> nace para cubrir una necesidad personal, pero no solo quedo ahi, decidí traer el API a cualquiera que a necesite de manera gratuita y publica.</p>
            <p>La API dispone de mas de <strong className='strong-documentacion'>110 recetas</strong> y <strong className='strong-documentacion'>23 categorias</strong> junto con los <strong className='strong-documentacion'>ingredientes</strong> de cada receta, <strong className='strong-documentacion'>pasos</strong> para su elaboracion, <strong className='strong-documentacion'>tiempo</strong> de preparacion, y muy pronto <strong className='strong-documentacion'>imagenes</strong>.</p>

            <h2 id='baseURL'>Base URL</h2>
            <p>La base <strong className='strong-documentacion'>URL</strong> del <strong className='strong-documentacion'>API </strong> es <strong className='strong-documentacion'>ttps://apifood-33iq.onrender.com</strong> y si esta llegase a cambiar, estara actualizada en esta misma documentacion.</p>

            <h2 id='formatoRequest'>Formato de request</h2>
            <p>Al momento de realizar una <strong className='strong-documentacion'>peticion</strong> a la API nos devolvera un obejto de tipo <strong className='strong-documentacion'>JSON</strong> con la informacion que hayamos consultado, de esta forma:</p>

            <JsonDisplay data={request} tittle={'Ejemplo JSON Request'}/>

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

            <MetodosGET 
            id='obtenerTodasRecetas'
            title='Obtener todas las recetas' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>todas las recetas almacenadas en la base de datos.</strong>" 
            link='/api/recetas'
            placeholder='/api/recetas'/>

            <MetodosGET 
            id='obtenerRecetasLimite'
            title='Obtener cantidad determinada de recetas' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>una cantidad requerida de recetas</strong> la cual le pasaremos por la query 'limit='" 
            link='/api/recetas/limit?limit=4'
            placeholder='/api/recetas/limit?limit=<int: limite>'/>

            <MetodosGET 
            id='obtenerRecetasRandom'
            title='Obtener recetas random' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>una cantidad requerida de recetas de forma random.</strong> Usando la query 'limit=' fijamos una cantidad determinada que devolvera." 
            link='/api/recetas_random?limit=4'
            placeholder='/api/recetas_random?limit=<int: limite>'/>

            <MetodosGET 
            id='buscarRecetasNombre'
            title='Buscar recetas por nombre' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>las recetas que coincidan con el nombre introducido</strong> en la query 'nombre='" 
            link='/api/recetas/buscar?nombre=pancakes'
            placeholder='/api/recetas/buscar?nombre=<str: nombre>'/>

            <MetodosGET 
            id='buscarRecetasID'
            title='Buscar recetas por ID' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>las recetas que coincidan con el ID introducido.</strong>" 
            link='/api/recetas/id/4'
            placeholder='/api/recetas/id/<int: id_receta>'/>

            <MetodosGET 
            id='buscarRecetasCategoria'
            title='Buscar recetas por categoria' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>las recetas que coincidan con el nombre de la categoria introducido</strong> en la query 'nombre_categoria='"
            link='/api/recetas/buscar_por_categoria?nombre_categoria=desayuno'
            placeholder='/api/recetas/buscar_por_categoria?nombre_categoria=<str: nombre categoria>'/>

            <MetodosGET 
            id='obtenerTodasCategorias'
            title='Obtener todas las categorias' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>todas las categorias disponibles.</strong>" 
            link='/api/categorias'
            placeholder='/api/categorias'/>

            <MetodosGET 
            id='buscarCategoriaNombre'
            title='Buscar categoria por nombre' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>la categoria que coincida con el nombre introducido</strong> en la query 'nombre_categoria='" 
            link='/api/categorias/buscar_por_nombre?nombre_categoria=almuerzo'
            placeholder='/api/categorias/buscar_por_nombre?nombre_categoria=<str: nombre categoria>'/>

            <MetodosGET 
            id='buscarRecetaIngrediente'
            title='Buscar recetas por ingrediente' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>las recetas que contengan el ingrediente introducido</strong> en la query 'n_ingrediente='" 
            link='/api/recetas/buscar_por_ingrediente?nombre_ingrediente=tomate'
            placeholder='/api/recetas/buscar_por_ingrediente?n_ingrediente=<str: nombre ingrediente>'/>

            <MetodosGET 
            id='buscarRecetaTiempo'
            title='Buscar recetas por tiempo de preparacion' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>las recetas que coincidan con el tiempo de preparacion introducido</strong>" 
            link='/api/recetas/prep_time/10'
            placeholder='/api/recetas/prep_time/<int: tiempo de preparacion>'/>

            <MetodosGET 
            id='obtenerRecetaSimilares'
            title='Obtener recetas similares' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>las recetas similares respecto al id de una receta introducido</strong> en la query 'id_receta='" 
            link='/api/recetas/similares?id_receta=2'
            placeholder='/api/recetas/similares?id_receta=<int: id receta>'/>

            <MetodosGET 
            id='obtenerIngredientesReceta'
            title='Obtener ingredientes de una receta' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>los ingredientes de la receta que coincida con el ID introducido</strong>" 
            link='/api/recetas/1/ingredientes'
            placeholder='/api/recetas/<int: id_receta>/ingredientes'/>

            <p>Formato request de los ingredientes de una receta.</p>
            <JsonDisplay data={ingredientes} tittle={'JSON Request'}/>

            <MetodosGET 
            id='obtenerInstruccionesReceta'
            title='Obtener instrucciones de preparacion' 
            parrafo="Usando este metodo GET podemos hacer una peticion a la API para que devuelva <strong className='strong-documentacion'>las instrucciones de preparacion de la receta que coincida con el ID introducido</strong>" 
            link='/api/recetas/1/instrucciones'
            placeholder='/api/recetas/<int: id_receta>/instrucciones'/>

            <p>Formato request de las intrucciones de preparacion* de una receta.</p>
            <JsonDisplay data={instrucciones} tittle={'JSON Request'}/>
        
        </article>
    )
}