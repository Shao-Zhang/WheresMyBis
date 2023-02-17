import axios from "axios"



async function queryFights(logCode) {
    let queryString = 'query{reportData{report(code:'+'"'+logCode+'"'+'){fights(killType:Kills){name}}}}'
    let res = await axios.post(
        'https://www.warcraftlogs.com/api/v2/client',
        {query:queryString},
        {headers: {"Authorization": "Bearer " + sessionStorage.getItem("accessToken")}}
    )
    console.log(res.data.data.reportData.report.fights)
    return res.data.data.reportData.report.fights
}

export default queryFights;