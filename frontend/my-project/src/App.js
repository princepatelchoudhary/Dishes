import './App.css';
import Header from './Components/header';
import Spinner from './Components/Spinner';
import Cards from './Components/cards';
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { AppContext } from './context/AppContext';
import{useContext} from 'react'


function App() {
    const {fetchData,laoding} = useContext(AppContext);
      useEffect(() => {
        fetchData();
        }, []);
  return (
    
    <div className="min-h-screen flex-col flex bg-stone-500">
      <div>
        <Header/>
      </div>

      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {
            laoding ? (
              <Spinner />
            ) : (
              <Cards />
            )
          }
        </div>
    </div>
  );
}

export default App;
