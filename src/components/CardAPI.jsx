import '../styles/CardAPI.css'

export function CardAPI({imagen, textoParrafo}){
    return(
        <div className="card-offer-api">
            <img src={imagen} alt="" />
            <p dangerouslySetInnerHTML={{ __html: textoParrafo }} />
        </div>
    )
}