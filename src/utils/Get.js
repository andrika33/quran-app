import axios from "axios";

const Get = (baseUrl, path)=>{
    const promise = new Promise((resolve, reject)=>{
        axios.get(`${baseUrl}/${path}`).then((res)=>{
            resolve(res);
        }, (err)=>{
            reject(err);
        })

    })

    return promise
}

export default Get;
