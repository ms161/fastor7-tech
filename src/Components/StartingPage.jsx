import React from "react";
import { Link } from "react-router-dom";

const StartingPage = () => {

  
 
    const fetchData = async (e) => {
      e.preventDefault()
      console.log('running')
      try {
        const response = await fetch(
          "https://staging.fastor.in/v1/pwa/user/register",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTgxMCIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjAtMTItMTlUMTE6MTM6MjQuMDAwWiIsImlhdCI6MTY5Nzc0MTU5NCwiZXhwIjoxNzA0OTk5MTk0fQ.bOJ0rFC6hz1iyioo_ypuOhzQtSF_VtHXA1SsIOzdYC8",
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await response.json();
        
        console.log(responseData);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

 
  


  

  return (
    <>
      <p className="mt-80 text-3xl font-bold">Enter you Mobile number</p>
      <p className="text-gray-500 mt-3">
        we will send you the 4 digit verification code
      </p>
      <div className="md:flex flex-col md:items-center">
        <form onSubmit={fetchData} className="flex flex-col justify-center items-center">
          <input
            required
            className="border border-gray-300 py-4 px-20 rounded-lg mt-6 w-96 text-center"
            type="number"
            placeholder="Enter your mobile number"
          />
          <Link to={"/verification"}>
            <button
              type="submit"
              className="py-4 px-20 bg-red-400 mt-6 rounded-lg text-white w-96"
            >
              Send Code
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default StartingPage;
