import axios from "axios";

const Post = (baseUrl, path, data)=>{
    const promise = new Promise((resolve, reject)=>{
        axios.post(`${baseUrl}/${path}`, data).then((res)=>{
            resolve(res);
        }, (err)=>{
            reject(err);
        })

    })

    return promise
}

export default Post;