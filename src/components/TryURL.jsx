import '../styles/TryURL.css'

export function TryURL({link, placeholder}){
    return (
        <div className='contenedor-try'>
            <span className='span-placeholder'>{placeholder}</span>
            <a href={link} target='_blank' className='try-button'>Try</a>
        </div>
    )
}