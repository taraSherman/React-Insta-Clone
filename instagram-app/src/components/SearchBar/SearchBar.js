import React from 'react';
import './search-bar.css';


const SearchBar = props => {
    return (
        <div className="searchbar-container">
            <div className="searchbar-logo">
                <i className="fab fa-instagram icon" aria-hidden="true"></i>
                <h1 className="searchbar-title">Instagram</h1>
            </div>

            <input type="text" className="searchbar-input" placeholder="Search"></input>
            <div className="searchbar-link-container">
                <i className="far fa-compass icon"></i>
                <i className="far fa-heart icon"></i>
                <i className="far fa-user icon"></i>
            </div>
        </div>
    )
};

export default SearchBar;