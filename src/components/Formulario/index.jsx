import { useState } from "react"
import { BotaoSubmit } from "../BotaoSubmit"
import { CampoTexto } from "../CampoTexto"
import { ListaSuspensa } from "../ListaSuspensa"

export const Formulario = (props) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        props.aoCadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    return (
        <section className="w-100 flex justify-center h-100 p-10">
            <form onSubmit={aoSubmeter} action="" className="bg-[#F2F2F2] w-1/2 h-fit px-8 py-12 flex flex-col gap-6 rounded-lg shadow-lg">
                
                <h3 className="font-prata text-lg">Preencha os dados para criar o card do colaborador.</h3>
                
                <CampoTexto 
                    label='Nome'    
                    placeholder='Digite seu nome'    
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    label='Cargo'    
                    placeholder='Digite seu cargo' 
                    obrigatorio={true}
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)}  
                />
                <CampoTexto 
                    label='Imagem'    
                    placeholder='Digite o endereço URL da imagem'  
                    obrigatorio={true} 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    itens={props.times} 
                    label="Time"
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <BotaoSubmit content="Criar botao" />
            </form>
        </section>
    )
}