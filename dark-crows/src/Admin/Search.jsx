import React,{useState} from "react";
import "./adminToggle.css";
import registeredOrgs from "./registeredOrgs";

function Search(){
    const [isHidden,setIsHidden] = useState("hidden");
    const [searchedOrgs,setSearchedOrgs] = useState([]);
    function searchBar(){
        const input = document.querySelector('.input').value;
        const newSearchedOrgs = [];
        for(let i=0; i<registeredOrgs.length; i++){
            if(registeredOrgs[i].name.includes(input)){
                newSearchedOrgs.push(registeredOrgs[i]);
            }
        }
        setSearchedOrgs(newSearchedOrgs);
        setIsHidden("");
    }

    return(
        <div>
            <div className="container p-4">
                
                <div className="search-container">
                <input className="input" type="text" />
                <svg viewBox="0 0 24 24" className="search__icon cursor-pointer" onClick={searchBar}>
                    <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                    </path>
                    </g>
                </svg>
                </div>
            </div>
            <ul className={isHidden}>
                {searchedOrgs.map((org, index) => (
                    <li key={index}>{org.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;