import Get from './Get';

import {baseUrlSurah} from "../config/config.js";

// POST
// const examplePost = (data)=> Post(baseUrlSurah, 'example', data)

// PUT
// const examplePut = (data, id)=> Put(baseUrlSurah, `example/${id}`, data)

// DELETE
// const exampleDelete = ()=> Delete(baseUrlSurah, `example/${id}`)

// GET
const getSurah = ()=> Get(baseUrlSurah, 'surah')

const API = {
    getSurah
}

export default API;