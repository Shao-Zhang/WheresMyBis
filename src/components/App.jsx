import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import getAccessToken from "../tokenService";
import queryFights from "../query";
import DisplayCard from "./Card";


function App() {

    // const [bossesLeft, setBossesLeft] = useState(["Flame Leviathan",
    //     "Ignis the Furnace Master", "Razorscale", "XT-002 Deconstructor",
    //     "The Assembly of Iron", "Kologarn", "Auriaya", "Hodir", "Thorim",
    //     "Freya", "Mimiron", "General Vezax", "Yogg-Saron"])

    // const [bossesKilled, setBossesKilled] = useState([])

    const [raidState, setRaidState] = useState({
        bossesKilled: [],
        bossesLeft: ["Flame Leviathan",
            "Ignis the Furnace Master", "Razorscale", "XT-002 Deconstructor",
            "The Assembly of Iron", "Kologarn", "Auriaya", "Hodir", "Thorim",
            "Freya", "Mimiron", "General Vezax", "Yogg-Saron", "Algalon the Observer"]
    })


    async function parseLogLink(link) {
        const splitStr = link.split("/");
        await getAccessToken();
        // gets query of bosses killed
        let bossKill = await queryFights(splitStr[splitStr.length - 2]);
        // setBossesKilled(() => {
        //     let tempArray = [];
        //     for (let boss of bossKill) {
        //         tempArray.push(boss.name);
        //     }
        //     console.log("setBOssesKilled comeplete")
        //     return tempArray;
        // })
        setRaidState((prevState) => {
            // tempArray contains bosses killed from log
            let tempArray = [];
            for (let boss of bossKill) {
                tempArray.push(boss.name);
            }
            return ({
                bossesKilled: tempArray,
                bossesLeft: prevState.bossesLeft.filter(name => !tempArray.includes(name))
            })

        })
    }


    return (
        <div>
            <Header />
            <img src="../images/the-assembly-of-iron.gif" alt="" />
            <SearchBar getLogCode={parseLogLink} />
            <h2>Upcoming Bosses</h2>
            <div className="card-container">
                {raidState.bossesLeft.map((boss) => {
                    return <DisplayCard key={boss} name={boss} class="boss-card" />
                })}
            </div>
            <h2>Bosses Killed</h2>
            <div className="card-container">
                {raidState.bossesKilled.map((boss) => {
                    return <DisplayCard key={boss} name={boss} class="boss-card" />
                })}
            </div>

        </div>
    )
}

export default App