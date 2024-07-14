import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [laoding, setLoading] = useState(true);
    const [Data,setData] = useState();
    const API="http://localhost:4000/api/v1/";
    const fetchData = async () => {
        setLoading(true);
        try {
            //call Api to feact the data
          const res = await fetch(API+"getFoods");
          const output = await res.json();

          // setCourses(output);
          setData(output.data);
          setLoading(false);
        } catch (err) {
          toast.error("Something Went Wrong");
        }
    };
    async function  update(dishId){
        try {
            //call Api to update in database
          const res = await fetch(API+"update/"+dishId,
            {method:"put"}
          );
          const output = await res.json();
          console.log(output);
          //update Data and reflect on UI
          setData((prev)=> prev.map((dish) => {
              if(dish.dishId==dishId)
              {
                dish.isPublished=!dish.isPublished;
                if(dish.isPublished)
                  toast.success(dish.dishName +" is Published Successfully");
                else
                  toast.warning(dish.dishName+" is Removed from Published");
              }
              return dish;
          }))
          
            } catch (err) {
            toast.error("Something Went Wrong");
            }    
    }
    const value ={
        laoding,
        Data,
        fetchData,
        update
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export default AppContextProvider;