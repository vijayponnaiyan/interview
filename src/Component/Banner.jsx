import React from 'react'
import Logo from '../assets/images.png'
export default function Banner() {
    return (
        <>  
        <div className='bg-slate-500 w-full h-auto'>
            <div className="p-4 md:p-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="md:pl-28 text-center md:text-left " > 
                        <div>
                        <h1 className="text-3xl md:text-5xl p-2">
                            <span className="text-indigo-300">Founding Modern</span><br />
                            <span className="text-gray-200">Physical Therapy</span><br />
                            <span className="text-gray-200">Documentation</span>
                        </h1>
                        </div>
                        <div className="pt-6 md:pt-10 pl-2 md:pl-4">
                            <p className="text-base md:text-lg leading-relaxed">
                                <span className="text-indigo-300">Intuitive AI-assisted clinical SOAP</span><br />
                                <span className="text-indigo-300">notes. Let technology take care of</span><br />
                                <span className="text-indigo-300">your documentation, and you take</span><br />
                                <span className="text-indigo-300">care of your patients.</span>
                            </p>
                        </div>

                    </div>
                    <div className="mt-6 md:mt-0 md:pr-52">
                        <img src={Logo} className="w-44 md:w-52" alt="Logo" />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
