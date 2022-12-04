import Logo from '../Assets/Images/logo.png'

function Navbar(){
    return(
        <div className="flex flex-row py-4 px-20 justify-between">
            <img className='h-[80px]' src={Logo} alt="" />
            <div className='flex flex-row justify-between w-[45%] mt-4'>
                <li className='list-none text-[20px] text-white font-semibold hover:text-black py-1 px-2 hover:bg-white cursor-pointer rounded-2xl'>Home</li>
            </div>
            <img className='h-[80px]' src={Logo} alt="" />
        </div>
    )
}

export default Navbar;