import { useState } from "react";
function SearchBar({onSubmit}) {

    const [term, setTerm] = useState('')


    const handleFormSubmit = (event) =>{
        event.preventDefault()
        onSubmit(term)
    }
    const handleChange = (event) =>{
        console.log(event.target.value);
        setTerm(event.target.value)
    }
    return (
        <div>
            SearchBar
            <form onSubmit={handleFormSubmit}>
                Confim your search: {term} <br />
                <input onChange={handleChange}/>
                {/* <button onClick={handleClick}>Click</button> */}
            </form>
        </div>
    )
}

export default SearchBar;