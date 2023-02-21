import axios from "axios"



async function queryFights(logCode) {
    let queryString = 'query{reportData{report(code:'+'"'+logCode+'"'+'){fights(killType:Kills){name}}}}'
    let res = await axios.post(
        'https://www.warcraftlogs.com/api/v2/client',
        {query:queryString},
        {headers: {"Authorization": "Bearer " + sessionStorage.getItem("accessToken")}}
    )

    if (res.data.errors){
        alert("Error in provided log link");
        return []
    } else {
        return res.data.data.reportData.report.fights
    }
}

export default queryFights;