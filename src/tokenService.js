import axios from "axios";


function getAccessToken() {
    if (sessionStorage.getItem("accessToken") !== null){
        console.log("token exists "+ sessionStorage.getItem("accessToken"));
    } else {
        axios.request({
            url: "https://www.warcraftlogs.com/oauth/token",
            method: "post",
            auth: {
                username: process.env.REACT_APP_CLIENT_ID,
                password: process.env.REACT_APP_CLIENT_SECRET
            },
            data: {
                "grant_type":"client_credentials"
            }
        }).then(function (res){
            sessionStorage.setItem("accessToken", res.data.access_token)
            console.log(res.data.access_token)
        })
    }
}

export default getAccessToken