import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import DropDown from "./DropDownMenu";
import getAccessToken from "../tokenService";
import queryFights from "../query";
import DisplayCard from "./Card";
import queryDataBase from "../queryDB";



function App() {

    const [raidState, setRaidState] = useState({
        bossesKilled: [],
        bossesLeft: ["Flame Leviathan",
            "Ignis the Furnace Master", "Razorscale", "XT-002 Deconstructor",
            "The Assembly of Iron", "Kologarn", "Auriaya", "Hodir", "Thorim",
            "Freya", "Mimiron", "General Vezax", "Yogg-Saron", "Algalon the Observer"]
    })
    const [bossDrop, setBossDrop] = useState({})


    async function parseLogLink(link) {
        const splitStr = link.split("/");
        await getAccessToken();
        // gets query of bosses killed
        let bossKill = await queryFights(splitStr[splitStr.length - 2]);
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


    async function queryClassItem(spec) {
        console.log("Query "+spec)
        let bossDrops = await queryDataBase(spec);
        setBossDrop(bossDrops);
    }


    return (
        <>
            <Header />
            <SearchBar getLogCode={parseLogLink} />
            {/* <button className="class-button" type="button" onClick={queryClassItem}><img src={require("../images/demoLock-icon.jpg")} alt="" name="DemonologyWarlock" /> </button> */}
            <DropDown querySpec={queryClassItem}/>
            <h2>Upcoming Bosses</h2>
            <div className="card-container">
                {raidState.bossesLeft.map((boss) => {
                    return <DisplayCard class="boss-card" key={boss} name={boss} drops={bossDrop?.[boss]} />
                })}
            </div>
            {/* <h2>Bosses Killed</h2>
            <div className="card-container">
                {raidState.bossesKilled.map((boss) => {
                    return <DisplayCard key={boss} name={boss} class="boss-card" drops={bossDrop[boss]} />
                })}
            </div> */}

        </>
    )
}

export default App