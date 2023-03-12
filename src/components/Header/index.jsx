import Banner from '../../assets/banner.png'


export const Header = () => {
    return (
        <div className="w-100 flex justify-center bg-[#6278F7] box-border">
            <img src={Banner} alt="" className='max-w-5xl'/>
        </div>
    )
}