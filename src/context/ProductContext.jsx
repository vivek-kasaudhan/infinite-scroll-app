import { useState, useContext, createContext } from "react";


const SearchContext = createContext();

export const SearchContextProvider =  ({children})=>{

    const [searchQuery, setSearchQuery] = useState('');  // Search query state

    // Handle search query and filter products
    const handleSearch = (query) => {
      setSearchQuery(query);  // Update search query
  
    
    };
    return (
    <SearchContext.Provider value={{ searchQuery, handleSearch }}>
      {children}
    </SearchContext.Provider>
    )
}

// custom hook
export const useSearch = () => useContext(SearchContext);