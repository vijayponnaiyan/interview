import React from 'react'
import one from '../assets/happy.jpg'
export default function SectionLayerone() {
  return (
    <>
      <div className="bg-slate-500 w-full h-auto ">
        <div className="p-4 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-center pt-5 md:pt-14">
            <div className="text-center md:text-left md:pl-28">
              <h1 className="text-3xl md:text-4xl p-2 leading-relaxed">
                <span className="text-indigo-300">Computer Vision and AI</span><br />
                <span className="text-indigo-300">that recognize and</span><br />
                <span className="text-indigo-300">accurately capture range</span><br />
                <span className="text-indigo-300">of motion, posture, gait,</span><br />
                <span className="text-indigo-300">and functional movements</span>
              </h1>
            </div>
            <div className="mt-6 md:mt-0 md:pr-52">
              <img src={one} className="w-48 h-36 md:w-80 md:h-60 rounded-lg ml-0 md:ml-10" alt="Illustration" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
