import React, {useState} from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import getAccessToken from "../tokenService";
import queryFights from "../query"


function App() {
    // const [logCode, setLogCode] = useState("");

    const [bossesKilled, setBossesKilled] = useState([])


    async function parseLogLink(link) {
        const splitStr = link.split("/");
        await getAccessToken();
        // gets query of bosses killed
        let bossKill = await queryFights(splitStr[splitStr.length - 2]);
        setBossesKilled(()=>{
            console.log("hello");
            let tempArray = []
            for (let boss of bossKill){
                tempArray.push(boss.name)
            }
            return tempArray
        })
        console.log()
    }
    

    return (
        <div>
            <Header />
            <SearchBar getLogCode={parseLogLink}/>
            {bossesKilled.map((bosses) =>{
                return <p key={bosses}>{bosses}</p>
            })}
        </div>
    )
}

export default App