//borrowed from formalbridge


function SearchBar({searchTerm, setSearchTerm}) {

    function handleSearchTerm(e) {
     const termToSearch = e.target.value;
     setSearchTerm(termToSearch);
     console.log("The current search term is: ", searchTerm);
    }
 
    
 
 
     return (
         <>
           <div className="self-center m-auto rounded-full px-5 py-2 w-[15%] shadow-md border border-gray-300 flex items-center">
             <input className="border-none outline-none w-full placeholder:animate-[scrollPlaceholder_10s_linear_infinite] placeholder:whitespace-nowrap" value={searchTerm} onChange={handleSearchTerm} placeholder="Search by College or Event" />
           </div>
         </>
     )
 }
 
 export default SearchBar;

 /* 
 here's the styling: .searchBar {
    align-self: center;
    border-radius: 30px;
    padding: 10px 20px;
    width: 10%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
}
.searchBarInput {
    border: none;
    outline: none;
    width: 100%;
}

@keyframes scrollPlaceholder {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
}
  
.searchBar::placeholder {
    display: inline-block;
    animation: scrollPlaceholder 10s linear infinite;
    white-space: nowrap;
}
 */