import React, { useState, useEffect } from "react";
import API from "../utils/Services";

export const JadwalSholat = () => {
  const [jadwal, setJadwal] = useState(null);
  const [tempat, setTempat] = useState(null);

  const getJadwalApi = async () => {
    await API.getJadwal("1609", "2021", "06", "23").then((res) => {
      setJadwal(res.data?.data?.jadwal);
      setTempat(res.data?.data?.lokasi);
    });
  };

  useEffect(() => {
    getJadwalApi();
  });

  return (
    <div className="mb-3 rounded-lg bg-white p-6 shadow-md">
      <h3 className="flex justify-start items-center mb-3">
        <strong>Jadwal Sholat</strong>
      </h3>
      <p className="text-center text-sm">Description </p>
      <select name="list">
        <p>aaaa</p>
        <p>aaaa</p>
        <p>aaaa</p>
        <p>aaaa</p>
        <p>aaaa</p>
      </select>
      <div className="flex justify-between items-center">
        <div>
          <p>Lokasi : </p>
        </div>
        <div>{tempat}</div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>Isya</p>
          <p>Shubuh</p>
          <p>Dzuhur</p>
          <p>Ashar</p>
          <p>Maghrib</p>
        </div>
        <div>
          <p>{jadwal?.isya}</p>
          <p>{jadwal?.subuh}</p>
          <p>{jadwal?.dzuhur}</p>
          <p>{jadwal?.ashar}</p>
          <p>{jadwal?.maghrib}</p>
        </div>
      </div>
    </div>
  );
};
