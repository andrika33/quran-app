import axios from "axios";

const Delete = (baseUrl, path)=>{
    const promise = new Promise((resolve, reject)=>{
        axios.delete(`${baseUrl}/${path}`).then((res)=>{
            resolve(res);
        }, (err)=>{
            reject(err);
        })

    })

    return promise
}

export default Delete;
