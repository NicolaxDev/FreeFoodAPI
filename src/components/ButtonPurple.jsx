import { Link } from 'react-router-dom'
import '../styles/ButtonPurple.css'

export function ButtonPurple({link, texto, target}){
    return(
        <a className='button-purple-a' href={link} target={target} >{texto}</a>
    )
}