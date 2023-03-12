export const CampoTexto = (props) => {
    
    
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={props.label}>{props.label}</label> 
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} type="text" name={props.label} className='border-none shadow-lg rounded p-2' placeholder={props.placeholder}/>
        </div>
    )
}