import Axios from 'axios'

export function sendToLambda (serviceUrl,data){
    return new Promise((resolve,reject)=>{
        Axios.post(serviceUrl,JSON.stringify(data))
        .then((res)=>{
            resolve(res.data) 
        })
        .catch(e=>{
            reject(e)
        })
    })
    
}
