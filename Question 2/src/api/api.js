import axios from "axios";

let token=""

export const fetchDetail = async(id) => {
    console.log(token)
    try {
        const res =  await axios.get(`http://20.244.56.144/train/trains/${id}`,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`bearer ${token}`,
            }
        });
        console.log(res)
        return res
    } catch (error) {
        console.error(error)
    }
}

export const fetchToken = async () => {
        const res = await axios.post("http://20.244.56.144/train/auth",
            {
                "companyName": "Train Central",
                "clientID": "f1398e40-de63-4ed0-975d-1593abbe047e",
                "ownerName": "Dhanush Sundar S",
                "ownerEmail": "ds5085@srmist.edu.in",
                "rollNo": "RA2011026020082",
                "clientSecret": "dGccTVagiJddzfPU"
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            })
        token = res.data.access_token
        return res.data.access_token
    }



export const getData = async (token) => {
    try {
        const res =  await axios.get("http://20.244.56.144:80/train/trains",{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`bearer ${token}`,
            }
        });
        return res
    } catch (error) {
        console.error(error)
    }
}