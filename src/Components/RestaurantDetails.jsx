import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const RestaurantDetails = () => {
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

  let param = useParams();
  console.log(param.id);
  let filteredData = data.filter((e) => e.restaurant_id === param.id);
  console.log(filteredData);
  return (
    <div>
        
      {filteredData.map((e) => (
        <div>
            
          <img src={e.images[0].url} alt="" />
          <p>{e.restaurant_name}</p>
          <p>{e.location?.location_address_2}</p>
          <p>{e.merchant_payment_methods}</p>

          <p>Opens at: {e.opens_at}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetails;
