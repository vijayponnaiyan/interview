import React from 'react'
import Logo from '../assets/images.png'
import Banner from '../Component/Banner'
export default function Header() {
    return (
        < >
            <div>
                <nav className='bg-slate-500 w-full h-auto' >
                    <div className='p-10' >
                        <div className='flex justify-between ' >
                        <div>
                            <img src={Logo} className='w-20' alt="" srcset="" />
                        </div>
                        <div  className=''>
                            <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </div>
                        </div>
                    </div>
                     <div>
                        <Banner />
                     </div>
                </nav>

            </div>
        </>
    )
}
