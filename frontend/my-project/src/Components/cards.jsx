import Card from './card';
import React,{useState} from 'react';
import{useContext} from 'react'
import { AppContext } from '../context/AppContext';

const Cards =() =>{
    const {Data} = useContext(AppContext);
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4 mt-4">
            {
                Data.map((dish)=>(<Card dish={dish} key={dish._id}></Card>))
        }
        </div>

    )
}
export default Cards;