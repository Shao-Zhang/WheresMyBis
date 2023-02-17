import React, {useState} from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import getAccessToken from "../tokenService";
import queryFights from "../query"


function App() {
    // const [logCode, setLogCode] = useState("");
    const [bossesKilled, setBossesKilled] = useState(["boss1"])

    async function parseLogLink(link) {
        const splitStr = link.split("/");
        await getAccessToken();
        let fights = await queryFights(splitStr[splitStr.length - 2]);
    }

    return (
        <div>
            <Header />
            <SearchBar getLogCode={parseLogLink}/>
        </div>
    )
}

export default App