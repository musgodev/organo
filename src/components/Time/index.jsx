import { Card } from '../Card'

export const Time = (props) => {

   
    return (
        
        props.colaboradores.length > 0 && 
        <section className="w-100 h-content py-4 flex flex-col items-center gap-6" style={{backgroundColor: props.corSecundaria}}>
            <h3 className="font-prata text-lg border-b-2 pb-2" style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="flex gap-2 h-content">
                {props.colaboradores.map( colaborador => 
                    < Card 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                    />
                )}
            </div>
        </section>
    )
}