import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import getAccessToken from "../tokenService";


function App() {
    getAccessToken()
    const [logCode, setLogCode] = useState("");

    function parseLogLink(link) {
        const splitStr = link.split("/");
        setLogCode(splitStr[splitStr.length - 2])
    }

    

    return (
        <div>
            <Header />
            <SearchBar getLogCode={parseLogLink}/>
        </div>
    )
}

export default App