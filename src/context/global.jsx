import {createContext, useContext, useReducer, useEffect} from "react";


const AnimeContext = createContext();

const baseUrl = "https://api.jikan.moe/v4"

//actions
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";

//reducer
const reducer = (state, action) => {
    switch(action.type){
        case LOADING:
            return {...state, loading: true};
        case GET_POPULAR_ANIME:
            return {...state, popularAnime: action.payload, loading: false};
        default: 
            return state;
    }
   
}

export const GlobalContextProvider = ({children}) => {
    //intial state
    const initialState = {
        popularAnime:[],
        upcomingAnime:[],
        airingAnime:[],
        pictures:[],
        isSearch: false,
        searchResults:[],
        loading: false
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    //fetching popular animes
    const getPopularAnime = async () => {
        try {
            dispatch({ type: LOADING });
            const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
        } catch (error) {
            console.error("Error fetching anime:", error);
            
        }

        
        

    }

    //initial render
    useEffect(() => {
        getPopularAnime();
    }, [])

    return(
        
        <AnimeContext.Provider value={{
            ...state,
            getPopularAnime,
        }}>
            {children}
        </AnimeContext.Provider>
    )
}

export const useGlobalContex = () => {
    return useContext(AnimeContext);
}