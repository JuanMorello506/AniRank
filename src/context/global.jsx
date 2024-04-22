import {createContext, useContext} from "react";

const GlobalContext = createContext();

const baseUrl = "https:api.jikan.moe/v4"

export const GlobalContextProvider = ({children}) => {
    const InitialState = {
        popularAnime:[],
        upcomingAnime:[],
        airingAnime:[],
        Pictures:[],
        isSearch:false,
        searchResults:[],
        loading:false
    }
    return(
        <GlobalContext.Provider value={'Hello'}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContex = () => {
    return useContext(GlobalContext);
}