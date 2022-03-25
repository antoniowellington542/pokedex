import AppContext from "./Context";


const AppProvider = ({children})=>{
    return(
        <AppContext.Provider value={{user: "Antonio"}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;