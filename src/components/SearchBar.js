import { useState } from "react";
function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('')
    const [changedText, setChangedText] = useState(false)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        // onSubmit(term)
    }
    const handleChange = (event) => {
        console.log(event.target.value);
        setTerm(event.target.value)
    }
    const handleClick = (event) => {
        // console.log(event.target.value);
        // setTerm(event.target.value)
        setChangedText(true)
    }
    return (
        <div>
            <h2>SearchBar</h2>
            <form onSubmit={handleFormSubmit}>
                Confim your search: {term} <br />
                {!changedText && <p>Good to see you</p> }
                {changedText && <p>Nice to see you</p>}
                <input onChange={handleChange} />
                <button onClick={handleClick}>Click</button>
            </form>
        </div>
    )
}

export default SearchBar;