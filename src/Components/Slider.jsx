import React, { useEffect, useState } from 'react'
import Datas from "./Data"
import {BsArrowRightSquareFill} from "react-icons/bs"
import {BsArrowLeftSquareFill} from "react-icons/bs"
const Slider = () => {
    const[currentIndex, setCurrentIndex] = useState(0)
    const handleNext =()=>{
        const num = Datas.length
        setCurrentIndex( currentIndex === num-1 ? 0 : currentIndex + 1)
    }
    const handlePrev =()=>{
        const num = Datas.length
        setCurrentIndex( currentIndex === 0 ? num-1 : currentIndex - 1)

    }

    const dots = Datas.map((data) => {
        return(
            <button key={data.id} className={data.id === currentIndex ? 'bg-[white] p-1 border-[14px] border-[red] rounded-full ':'' } onClick={() => setCurrentIndex(data.id)}>
               
            </button>
        )
    })
    const numm = Datas.length
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(currentIndex === numm - 1 ? 0 : currentIndex + 1)
        }, 5000)
        return () => clearInterval(intervalId)
    })
  return (
    <div className='mx-auto max-w-[1240px]'>
        <div className='relative max-w-[1240px] mx-auto py-16 px-4 flex justify-center items-center' id="slider">
        {Datas.map((data) => {
            return(
                <div key={data.id} className={data.id === currentIndex ? 'w-full h-full' : "hidden"}>
                       <img className="w-full rounded-md" src={data.img} alt=""/>
                </div>
            )
        })}
        <div className='absolute top-0 px-8 left-0 flex flex-row mt-[40%] w-full justify-between'>
            <BsArrowLeftSquareFill onClick={handlePrev} size={20} style={{color:"white"}}/>
            <BsArrowRightSquareFill onClick={handleNext} size={20} style={{color:"white"}}/>
        </div>
       
      </div>

        <div className='px-4'>
            {dots}
        </div>
    </div>
   
  )
}

export default Slider