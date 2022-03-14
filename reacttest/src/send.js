import Axios from 'axios'

export function sendToLambda (data){
    return new Promise((resolve,reject)=>{
        Axios.post('https://kabjsubakk.execute-api.us-east-1.amazonaws.com/default/lambdaV0',JSON.stringify(data))
        .then((res)=>{
            resolve(res.data) 
        })
        .catch(e=>{
            reject(e)
        })
    })
    
}
