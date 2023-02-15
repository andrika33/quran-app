import axios from "axios";

const Put = (baseUrl, path, data)=>{
    const promise = new Promise((resolve, reject)=>{
        axios.put(`${baseUrl}/${path}`, data).then((res)=>{
            resolve(res);
        }, (err)=>{
            reject(err);
        })

    })

    return promise
}

return Put;