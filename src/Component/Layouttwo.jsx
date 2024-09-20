import React from 'react'
import img from '../assets/Teacher.jpg';
export default function Layouttwo() {
  return (
    <div>
        <div>
        <div className="bg-gray-300 w-full h-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-6 md:p-24">
          <div className="p-5 md:pl-20">
            <img src={img} className="w-64 h-48 md:w-80 md:h-60 rounded-lg" alt="Image" />
          </div>
          <div className="text-center pt-4 md:text-left pl-0 md:pl-10 mt-6 md:mt-0 ">
            <h1 className="text-4xl pr-0 md:pr-10 text-white leading-snug">
              <span>informed Ai models that can</span><br />
              <span className="">suggest relevant billable</span><br />
              <span className="">diagnossis code and goals that</span><br />
              <span className="">support medical necessity</span><br />
              
         
            </h1>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}
