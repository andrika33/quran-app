import React, { useEffect, useState } from 'react'
import Octagon from '../../assets/images/octagon.png'
import { JadwalSholat } from '../../components/JadwalSholat'
import API from '../../utils/Services'
import { useParams } from 'react-router-dom';

export const Surah = () => {
    const [datasurah, setDataSurah] = useState(null)
    const [tafsir, setTafsir] = useState(null)
    const {idSurah} = useParams()

    const getSurahApi = async ()=>{
        await API.getSurahById(idSurah).then(res=>{
            setDataSurah(res.data.data)
            setTafsir(res.data.data.tafsir.id);
        })
    }

    useEffect(() => {
        getSurahApi()
    }, [idSurah])

    const tafsirSurah = ()=>{
        return(
            <div className="mb-3 rounded-lg bg-white p-6 shadow-md">
                <h3 className="flex justify-start items-center mb-3"><strong>Tafsir</strong></h3>
                <p className="text-justify text-sm">{tafsir} </p>
            </div>
        )
    }
    
    return (
        <div className="justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
                {
                    datasurah?.verses.map((item, index)=>{
                        return(
                            <div key={index}>
                                <div className="mb-3 rounded-lg bg-white p-6 shadow-md">
                                    <div className="flex justify-between mb-8">
                                        <button type="button" className="flex rounded-full bg-teal-500 text-sm">
                                            <div className="h-9 w-9 p-2 text-white">{item.number.inSurah}</div>
                                        </button>
                                        <div className="flex justify-end">
                                            <p className="font-bold text-lg mr-2">{item.text.arab} </p>
                                            <img src={Octagon} width={35} heigth={35} alt="octagon"/>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        {/* icon */}
                                    </div>
                                    <p className="text-sm text-teal-500">{item.text.transliteration.en}</p>
                                    <p className="text-gray-600 text-justify text-sm">{item.translation.id}</p>
                                </div>
                            </div>
                        )
                    })
                }                
            </div>  
            <div className="rounded-lg md:w-1/3">
                {tafsir === undefined ? "" : tafsirSurah()}   
                <JadwalSholat/>                      
            </div>            
        </div>
    )
}
