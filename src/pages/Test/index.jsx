import { useState } from "react"

export const Test = () => {


    let itens = [
        {
            nome: "Gabriel",
            sobrenome: "Moura",
            idade: "26"
        },
        {
            nome: "Karina",
            sobrenome: "Alves",
            idade: "44"
        },
        {
            nome: "Pablo",
            sobrenome: "Alves",
            idade: "16"
        },
    ]

    const [numero, setNumero] = useState(0)
    
    return (
        <div className="flex flex-col">
            {itens.map(item => <h2>{item.nome}</h2>)}
            <div className="mt-6">
                <h2>{numero}</h2>
                <button onClick={() => setNumero(numero + 1)}>Adicionar numero</button>
            </div>
        </div>
    )
}