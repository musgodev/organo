export const Card = (props) => {
    return (
        <div className="rounded-xl flex flex-col items-center gap-4 bg-[#FFF] border-2 w-40" style={{borderColor: props.corDeFundo}}>
            <div className="w-full rounded-t-lg flex justify-center" style={{backgroundColor: props.corDeFundo}}>
                    <img src={props.imagem} alt="" className="rounded-full w-20 my-4"/>
            </div>
            <div className="bg-[#FFF] w-full text-center flex flex-col gap-2 mb-4 p-4 font-montserrat">
                <h4 className="text-md font-semibold text-[#6278F7]">{props.nome}</h4>
                <h5 className="text-sm">{props.cargo}</h5>
            </div>
        </div>
    )
}
