import React, {useState} from "react";


function SearchBar() {

    const [newLink, setNewLink] = useState("");
    const [logCode, setLogCode] = useState("");



    function handleLinkChange(event) {
        setNewLink(event.target.value);
    }

    function handleClick(event) {
        const codeStr = newLink.split("/");
        setLogCode(codeStr[codeStr.length - 2]);
        console.log(logCode);
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