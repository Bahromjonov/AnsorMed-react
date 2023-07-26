import React from 'react'

const Footer = () => {
  return (
    <header className='bg-black '>
            <div className='containerr '>
                {/* Logo */}
                <div className='flex items-center justify-between py-6'>
                    <a className='flex items-center  ' href='#'>
                        <img className=' w-12 h-12 mr-4 text-black text-3xl font-semibold' src="./img/footer-logatip.png" alt="logotip" />
                        <h1 className='text-2xl font-semibold text-white hover:text-red-500 duration-500'>AnsorMed</h1>
                    </a>
                    {/* Heder Nav */}
                    <ul className='flex items-center space-x-8 text-white'>
                        <li>
                            <a className=' text-sm font-bold leading-5 text-white' href="#">XIZMATLAR</a>
                        </li>
                        <li>
                            <a className='text-sm font-bold leading-5 text-white' href="#">DORILAR</a>
                        </li>
                        <li>
                            <a className='text-sm font-bold leading-5 text-white' href="#">ASAL</a>
                        </li>
                        <li>
                            <a className='text-sm font-bold leading-5 text-white' href="#">KONTAKTLAR</a>
                        </li>
                        <li>
                            <a className='text-sm font-bold leading-5 text-white' href="#">BLOG</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
  )
}

export default Footer