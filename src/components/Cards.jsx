import React from 'react'
import single from '../assests/single.png'
import double from '../assests/double.png'
import triple from '../assests/triple.png'

const Cards = () => {
  return (
    <div className='w-full px-4 py-[10rem] bg-white'>
        <div className='max-w-[1240px] mx-auto grid  md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 bg-white mx-auto mt-[-3rem]' src={single} alt="/" />
                <h2  className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold '>$149</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'> Send up to 2 GB</p>
                </div>
                <button className='bg-[#df8600]  w-[200px]  rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl bg-orange-100 flex flex-col py-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 bg-white mx-auto mt-[-3rem] bg-transparent' src={double} alt="/" />
                <h2  className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center text-4xl font-bold '>$249</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8'>2 Granted User</p>
                    <p className='py-2 border-b mx-8'> Send up to 10 GB</p>
                </div>
                <button className='text-[#df8600]  w-[200px]  rounded-md font-medium mx-auto my-6 px-6 py-3 bg-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 bg-white mx-auto mt-[-3rem]' src={triple} alt="/" />
                <h2  className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-center text-4xl font-bold '>$349</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>2 TB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Granted User</p>
                    <p className='py-2 border-b mx-8'> Send up to 30 GB</p>
                </div>
                <button className='bg-[#df8600]  w-[200px]  rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Start Trial</button>
            </div>
        </div>

    </div>
  )
}

export default Cards