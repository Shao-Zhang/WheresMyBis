import React, { useState } from "react";
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'


function SearchBar(props) {

    const [newLink, setNewLink] = useState("");
    const [loading, setLoading] = useState(false);



    function handleLinkChange(event) {
        setNewLink(event.target.value);
    }

    async function handleClick(event) {
        console.log("set True")
        setLoading(true)
        await props.getLogCode(newLink)
        console.log("Set False")
        setLoading(false)
        event.preventDefault();
    }


    return (
        <form>
            <input onChange={handleLinkChange} type="text" value={newLink} placeholder="https://classic.warcraftlogs.com/reports/..." />
            {loading ? <LoadingButton loading variant="contained"><span>Submit</span></LoadingButton> :
                <Button color="primary" variant="contained" onClick={handleClick}>Submit</Button>}
        </form>
    )
}


export default SearchBar