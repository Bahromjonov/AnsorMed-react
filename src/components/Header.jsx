import React from 'react'

const Header = () => {
    return (
        <header className='w-full mx-auto container px-5'>
            {/* Logo */}
            <div className='flex items-center justify-between py-6'>
                <a className='flex items-center ' href='#'>
                    <img className=' w-12 h-12 mr-4 text-black text-3xl font-semibold' src="./img/footer-logatip.png" alt="logotip" />
                    <h1>AnsorMed</h1>
                </a>
                {/* Heder Nav */}
                <ul className='flex items-center space-x-8'>
                    <li className='text-[#222] text-sm font-bold leading-5'>
                        <a href="#">XIZMATLAR</a>
                    </li>
                    <li className='text-[#222] text-sm font-bold leading-5'>
                        <a href="#">DORILAR</a>
                    </li>
                    <li className='text-[#222] text-sm font-bold leading-5'>
                        <a href="#">ASAL</a>
                    </li>
                    <li className='text-[#222] text-sm font-bold leading-5'>
                        <a href="#">KONTAKTLAR</a>
                    </li>
                    <li className='text-[#222] text-sm font-bold leading-5'>
                        <a href="#">BLOG</a>
                    </li>
                </ul>
                <button className='bg-[#DE2E54] py-3 px-6 rounded-lg border-red  text-white hover:bg-white hover:text-black hover:border-red-500'>QABULGA YOZILISH</button>
            </div>
        </header>
    )
}

export default Header