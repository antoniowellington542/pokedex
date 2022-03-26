import { createContext, useContext, useState } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const LoadingContext = createContext();

export const LoadingProvider = ({children})=>{
    const [loading, setLoading] = useState(false);

    const value = { 
        loading, 
        showLoading: ()=>setLoading(true) , 
        hideLoading: ()=>setLoading(false),
    };

    return(
        <LoadingContext.Provider value={value}>
            <>
              {loading && <LoadingScreen/> }  
              {children}
            </>
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext)