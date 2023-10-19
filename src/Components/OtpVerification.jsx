import React from 'react'
import { Link } from 'react-router-dom'

const OtpVerification = () => {
  return (
    <>

    <p className='mt-80 text-3xl font-bold'>Otp Verification</p>
    <p className='text-gray-500 mt-3'>Enter the verification code we just sent on your Mobile Number.</p>
    <div className='md:flex flex-col md:items-center'>
  
    <input className='border border-gray-300 py-3 rounded-lg mt-8 w-96 text-center' type="text" placeholder='Enter Your Code here' />
    <Link to={'/homepage'}>
    <button className='py-4 px-20 bg-red-400 mt-6 rounded-lg text-white w-96'>Verify</button>
    </Link>
    <p className='mt-3'>Didnt't recieved code? <span className='text-blue-800 font-bold cursor-pointer'>Resend</span></p>
    </div>  
    </>
  )
}

export default OtpVerification