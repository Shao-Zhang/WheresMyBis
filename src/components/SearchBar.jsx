import React, {useState} from "react";


function SearchBar(props) {

    const [newLink, setNewLink] = useState("");



    function handleLinkChange(event) {
        setNewLink(event.target.value);
    }

    function handleClick(event) {
        props.getLogCode(newLink)
        event.preventDefault();
    }


    return (
        <form>
            <input onChange={handleLinkChange} type="text" value={newLink}/>
            <button onClick={handleClick}>Submit</button>
        </form>
    )
}


export default SearchBar