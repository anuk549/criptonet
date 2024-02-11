import React, { useContext, useState } from "react";
import { mockSearchResults } from "../constants/mock";

const Search = () => {

    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState([]);

    const clear = () => {
        setInput("");
        setBestMatches([]);
      };

      const updateBestMatches =  () => {
        
           
            setBestMatches(mockSearchResults.result);
         
      };

  return (
   <div
      className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white"
      
    >        
    <input
        type="text"
        value={input}
        className="w-full px-4 py-2 focus:outline-none rounded-md 
      "
        placeholder="Search stock..."
        onChange={(event) => {setInput(event.target.value)}}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
    
    
    </div>
  )
}

export default Search