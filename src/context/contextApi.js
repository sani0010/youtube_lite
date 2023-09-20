import React, {createContext, useState, useEffect} from "react";

import { fetchDataFromApi } from '../utils/api';

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setsearchResults] = useState(false);
    const [selectCategories, setselectCategories] = useState("New");
    const [mobileMenu, setmobileMenu] = useState(false);
    useEffect(()=>{fetchSelectedCategoriesData(selectCategories)
    },[selectCategories]);

    const fetchSelectedCategoriesData = (query) =>{
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then((contents) =>{
            console.log(contents);
            setsearchResults(contents);
            setLoading(false)
        })
    }

    return(
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setsearchResults,
            selectCategories,
            setselectCategories,
            mobileMenu,
            setmobileMenu,
        }}>
            {props.children}
        </Context.Provider>
    )
}