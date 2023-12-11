import { useState } from "react";
import "./Searchbar.css";

export default function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }
    const handleChange = (event) => {
        setTerm(event.target.value.replace(/[1-9]/, ''))
    }
    return(
        <div >
            <div className="search-bar">
                <form onSubmit={handleFormSubmit} className="searchbar-form">
                    <input 
                        className="input"
                        value={term}
                        onChange={handleChange}
                    />
                </form>
            </div>
            <h4 style={{color: 'red'}}>{term.length < 2 && 'your term must have more then 1 character'}</h4>
        </div>
    )
}