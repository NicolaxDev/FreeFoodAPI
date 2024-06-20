import { TryURL } from "./TryURL"

export function MetodosGET({id, title, parrafo, link, placeholder}){
    return(
        <>
            <h2 id={id}>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: parrafo }}/>
            <TryURL link={`https://apifood-33iq.onrender.com${link}`} placeholder={placeholder}/>
        </>
    )
}