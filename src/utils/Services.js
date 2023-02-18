import Get from "./Get";

import { baseUrlSurah, baseUrlJadwal } from "../config/config.js";

// POST
// const examplePost = (data)=> Post(baseUrlSurah, 'example', data)

// PUT
// const examplePut = (data, id)=> Put(baseUrlSurah, `example/${id}`, data)

// DELETE
// const exampleDelete = ()=> Delete(baseUrlSurah, `example/${id}`)

// GET
const getSurah = () => Get(baseUrlSurah, "surah");
const getJadwal = (id_kota, tahun, bulan, tanggal) =>
  Get(baseUrlJadwal, `sholat/jadwal/${id_kota}/${tahun}/${bulan}/${tanggal}`);

const API = {
  getSurah,
  getJadwal,
};

export default API;
