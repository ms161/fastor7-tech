import React, { useEffect, useState } from "react";
import Api from "./Api";
const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTgxMCIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjAtMTItMTlUMTE6MTM6MjQuMDAwWiIsImlhdCI6MTY5Nzc0MTU5NCwiZXhwIjoxNzA0OTk5MTk0fQ.bOJ0rFC6hz1iyioo_ypuOhzQtSF_VtHXA1SsIOzdYC8",
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className=" w-[95%] m-auto">
        <div className="border-b mt-7 border-black pb-2">
          <p className="ml-2  text-start text-gray-400 font-bold">
            Pre Order From
          </p>
          <p className="text-start ml-2 font-bold">Connaught place</p>
        </div>
        <div className="flex gap-x-7 mt-10 items-center justify-around ">
          <p className="text-start w-36 rounded-xl  p-1 bg-gray-100">
            <span className="text-2xl text-gray-400 font-bold text-start">
              Karan
            </span>
            <p className="font-bold">Let's explore this evening</p>
          </p>
          <p className="text-gray-400">
            <img
              className="w-20 rounded-xl  h-20"
              src="https://cdn.wedevs.com/uploads/2021/04/Limited-Time-Offer_-How-To-Write-a-Discount-Offer-For-Limited-Time-Only.png"
              alt=""
            />
            Offers
          </p>
          <p className="text-gray-400">
            <img
              className="w-20 h-20"
              src="https://www.magedelight.com/media/catalog/product/e/w/ewallets-final-logo.png"
              alt=""
            />
            Wallets
          </p>
        </div>
        <div className="">
          <div className="flex justify-between mt-10">
            <p className="font-bold text-xl">Your taste</p>
            <p>See All</p>
          </div>
          <div className="flex flex-wrap gap-5 mt-6 justify-around items-center">

          <div className=" w-[40%] md:w-[20%]">
            <p className="border rounded-2xl bg-red-100 font-mono ">
              <img className=" rounded-t-2xl " src="https://assets.winni.in/product/primary/2022/11/79735.jpeg?dpr=1&w=1000" alt="" />
              <p>Niks Baker's</p>
              <p className="text-sm text-gray-400">Connaught place,</p>
              <p className="text-sm text-gray-400">New Delhi</p>
            </p>
          </div>
          <div className="w-[40%] md:w-[20%]">
            <p className="border  rounded-2xl bg-red-100 font-mono ">
              <img className=" rounded-t-2xl " src="https://assets.winni.in/product/primary/2022/11/79735.jpeg?dpr=1&w=1000" alt="" />
              <p>Niks Baker's</p>
              <p className="text-sm text-gray-400">Connaught place,</p>
              <p className="text-sm text-gray-400">New Delhi</p>
            </p>
          </div>
          <div className="w-[40%] md:w-[20%]">
            <p className="border  rounded-2xl bg-red-100 font-mono ">
              <img className=" rounded-t-2xl " src="https://assets.winni.in/product/primary/2022/11/79735.jpeg?dpr=1&w=1000" alt="" />
              <p>Niks Baker's</p>
              <p className="text-sm text-gray-400">Connaught place,</p>
              <p className="text-sm text-gray-400">New Delhi</p>
            </p>
          </div>
          </div>
        </div>
        {data.map((e) => (
          <div>
            <Api
            // key={e.restaurant_id}
            data={e}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
