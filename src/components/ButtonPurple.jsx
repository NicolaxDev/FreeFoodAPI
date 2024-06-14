import { Link } from 'react-router-dom'
import '../styles/ButtonPurple.css'

export function ButtonPurple({link, texto}){
    return(
        <a className='button-purple-a' href={link} target='_blank' >{texto}</a>
    )
}