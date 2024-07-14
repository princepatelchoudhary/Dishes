import React from "react";
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import{useContext} from 'react'
const Card = (props)=>{
    const {update} = useContext(AppContext);
    function clickHandler()
    {
       update(props.dish.dishId);
    }
    return(
        <div className='bg-stone-800 bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div className=" ">
                <img src={props.dish.imageUrl} alt="Course Image" className='w-[300px] h-[250px] object-cover' />
            </div>
            <div className='text-white text-2xl  font-semibold leading-6 text-center	'>
                <h2>{props.dish.dishName}</h2>
            </div>
            <button onClick={clickHandler}
            className="bg-teal-500 w-[100%] mt-2 hover:bg-teal-400 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
            >
                {
                    props.dish.isPublished?`Published`:`Not Published`
                }
            </button>
        </div>
    )
}
export default Card;