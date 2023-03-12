export const ListaSuspensa = (props) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="">{props.label}</label>
            <select 
                name="" 
                id="" 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                className='border-none shadow-lg rounded p-2' 
                required={props.required} 
                value={props.valor}>
                        <option value=""></option>
                    {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}

            </select>
        </div>
    )
}