import {createContext, useContext, useReducer, useEffect} from "react";


const GlobalContext = createContext();

const baseUrl = "https:api.jikan.moe/v4"

//actions
const LOAD = `LOADING`
const SEARCH = `SEARCH`
const GET_POPULAR_ANIME = `GET_POPULAR_ANIME`
const GET_UPCOMING_ANIME = `GET_UPCOMING_ANIME`

//reducer
const reducer = (state, action) => {
    return state;
}

export const GlobalContextProvider = ({children}) => {
    //intial state
    const initialState = {
        popularAnime:[],
        upcomingAnime:[],
        airingAnime:[],
        Pictures:[],
        isSearch:false,
        searchResults:[],
        loading:false
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    //fetching popular animes
    const getPopularAnime = async () => {
        const response = await fetch(`${baseUrl}/top/anime`);
        const data = await response.json();
        console.log(data);

    }

    //initial render
    useEffect(() => {
        getPopularAnime();
    }, [])

    return(
        
        <GlobalContext.Provider value={{
            ...state
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContex = () => {
    return useContext(GlobalContext);
}