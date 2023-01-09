import React from 'react'
import{
FaDribbbleSquare,
FaFacebookSquare,
FaGithubSquare,
FaInstagram,
FaTwitterSquare,

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#df8600]'>REACT.</h1>
        <p className='py-4'>
            If you were asked to share one inspirational thought about data,
            what would it be? From tech leaders to data ops experts,
            many people have shared their most thought-provoking quotes about data.
            </p>
            <div className='flex md:w-[75%] justify-between my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-4 text-sm'>Analytics</li>
                    <li className='py-4 text-sm'>Marketing</li>
                    <li className='py-4 text-sm'>Commerce</li>
                    <li className='py-4 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-4 text-sm'>Pricing</li>
                    <li className='py-4 text-sm'>Documentation</li>
                    <li className='py-4 text-sm'>Guides</li>
                    <li className='py-4 text-sm'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-4 text-sm'>About</li>
                    <li className='py-4 text-sm'>Blogs</li>
                    <li className='py-4 text-sm'>Jobs</li>
                    <li className='py-4 text-sm'>Insights</li>
                    <li className='py-4 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-4 text-sm'>Claims</li>
                    <li className='py-4 text-sm'>Policy</li>
                    <li className='py-4 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer