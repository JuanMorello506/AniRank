import {createContext, useContext, useReducer, useEffect, useState} from "react";


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
        case SEARCH:
            return {...state, searchResults: action.payload, loading: false}
        case GET_UPCOMING_ANIME:
            return {...state, upcomingAnime: action.payload, loading: false}
        case GET_AIRING_ANIME:
            return {...state, airingAnime: action.payload, loading: false}
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

    const [state, dispatch] = useReducer(reducer, initialState);
    const [search,setSearch] = useState();

    //handlers
    const handleChange = (e) =>{
        setSearch(e.target.value);
        if(e.target.value === ''){
            initialState.isSearch = true;
        }
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        if(search){
            searchAnime(search);
            state.isSearch = true;
        }else{
            state.isSearch = false;
            alert('Please enter a search term')
        }
    };

    //fetching popular animes
    const getPopularAnime = async () => {
        try {
            dispatch({ type: LOADING });
            const response = await fetch(`${baseUrl}/top/anime`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
        } catch (error) {
            console.error("Error fetching anime:", error);
            
        }

    }

    //fetching upcoming anime
    const getUpcomingAnime = async () => {
        try{
            dispatch({type: LOADING})
            const response = await fetch(`${baseUrl}/top/anime?filter=upcoming`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            dispatch({type: GET_UPCOMING_ANIME, payload: data.data})
        } catch(error) {
            console.error("Error fetching anime:", error);
        }
        
    }


    //fetching airing anime
    const getAiringAnime = async () => {
        try{
            dispatch({type: LOADING})
            const response = await fetch(`${baseUrl}/top/anime?filter=airing`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            dispatch({type: GET_AIRING_ANIME, payload: data.data})
        }catch(error) {
            console.error("Error fetching anime:", error);
        }
    }

    //search anime
    const searchAnime = async (anime) => {
        try {
            dispatch({ type: LOADING });
            const response = await fetch(`${baseUrl}/anime?=${anime}`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            dispatch({ type: SEARCH, payload: data.data });
        } catch (error) {
            console.error("Error fetching anime:", error);
            
        }
        
    }


    return(
        
        <AnimeContext.Provider value={{
            ...state,
            handleChange,
            handleSumbit,
            searchAnime,
            search,
            getPopularAnime,
            getUpcomingAnime,
            getAiringAnime,
        }}>
            {children}
        </AnimeContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AnimeContext);
}