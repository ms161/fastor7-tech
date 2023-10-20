import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const StartingPage = () => {
  const [mobile, setMobile] = useState();
  const navigate = useNavigate();
  const fetchData = async (e) => {
    e.preventDefault();

    var urlencoded = new URLSearchParams();
    urlencoded.append("phone", mobile);
    urlencoded.append("dial_code", "+91");
    try {
      const res = await fetch(
        "https://staging.fastor.in/v1/pwa/user/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: urlencoded,
        }
      );

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        navigate("/verification");
      } else {
        throw Error(data.error_message);
      }
    } catch (error) {
      alert(error);
    }
  };

  const mobileNo = (e) => {
    setMobile(e.target.value);
  };

  return (
    <>
      <p className="mt-80 text-3xl font-bold">Enter you Mobile number</p>
      <p className="text-gray-500 mt-3">
        we will send you the 4 digit verification code
      </p>
      <div className="md:flex flex-col md:items-center">
        <form
          onSubmit={fetchData}
          className="flex flex-col justify-center items-center"
        >
          <input
            onChange={mobileNo}
            required
            className="border border-gray-300 py-4 px-20 rounded-lg mt-6 w-96 text-center"
            type="number"
            placeholder="Enter your mobile number"
          />

          <button
            type="submit"
            className="py-4 px-20 bg-red-400 mt-6 rounded-lg text-white w-96"
          >
            Send Code
          </button>
        </form>
      </div>
    </>
  );
};

export default StartingPage;
