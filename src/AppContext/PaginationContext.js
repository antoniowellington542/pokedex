import { useContext, createContext, useState } from "react";

const PaginationContext = createContext();

const LIMIT = 28;

export const PaginationProvider = ({children})=>{
    
    const[index, setIndex] = useState(undefined);

    const value = {
        index,
        onPageChange: (a)=>setIndex((a-1)*LIMIT),
        LIMIT
    }

    return(
        <PaginationContext.Provider value={value}>
            {children}
        </PaginationContext.Provider>
    )
}

export const usePagination = () => useContext(PaginationContext);