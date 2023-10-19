import React from 'react'
import { Link } from 'react-router-dom'
const Api = (props) => {
    console.log(props.data)
  return (
    <Link to={`/restaurants/${props.data.restaurant_id}`}>
    
    <div className='flex gap-10 mt-10 sm:justify-around rounded-xl md:justify-around  md:shadow-2xl py-5'>
       
            <img className='w-[35%] md:w-[25%] object-cover rounded-xl' src={props.data.images[0].url} alt="" />
            <p>
                <p className='text-xl font-bold'> {props.data.restaurant_name}</p>
                <p className='text-gray-400'>Cakes, Pastry, Pastas</p>
                <p className='text-gray-400'>{props.data.location?.location_address_2}</p>
                <p className='text-orange-400 font-bold'>4 Offers trending</p>
                <div className='flex gap-x-16 text-sm'>

                <p className='flex flex-col gap-x-9'>{props.data.rating.restaurant_avg_rating}
                <span>Rating</span>
                </p>
                <p className='flex flex-col'>

                <span>$200</span>
                <span>Cost for Two</span>
                </p>
                </div>
            </p>
       
    </div>
    </Link>
  )
}

export default Api