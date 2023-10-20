import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const OtpVerification = () => {
const [otp,setOtp]=useState('')
let navigate=useNavigate()
const otpFn=(e)=>{
  setOtp(e.target.value)
}
  const fetchData = async (e) => {
    e.preventDefault();
   
    var urlencoded = new URLSearchParams();
    urlencoded.append("phone", 9818979450);
    urlencoded.append('otp',123456)
    urlencoded.append("dial_code", "+91");
    try {
      const res = await fetch(
        "https://staging.fastor.in/v1/pwa/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: urlencoded,
        }
      );

      const data = await res.json();
      console.log(res);
      if (res.ok) {
        console.log(otp)
        if(otp==='123456'){
          console.log('working')
          navigate('/homepage')
        }
        
        // navigate("/verification");
      } else {
        throw Error(data.error_message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>

    <p className='mt-80 text-3xl font-bold'>Otp Verification</p>
    <p className='text-gray-500 mt-3'>Enter the verification code we just sent on your Mobile Number.</p>
    <p className='text-gray-500 mt-3'> Enter Otp 123456</p>
    <div className='md:flex flex-col md:items-center'>
  
    <input onChange={otpFn} className='border border-gray-300 py-3 rounded-lg mt-8 w-96 text-center' type="text" placeholder='Enter Your Code here' />
    {/* <Link to={'/homepage'}> */}
    <button onClick={fetchData}  className='py-4 px-20 bg-red-400 mt-6 rounded-lg text-white w-96'>Verify</button>
    {/* </Link> */}
    <p className='mt-3'>Didnt't recieved code? <span className='text-blue-800 font-bold cursor-pointer'>Resend</span></p>
    </div>  
    </>
  )
}

export default OtpVerification
