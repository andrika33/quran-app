import React, { useEffect, useState } from 'react'
import API from '../utils/Services'
import { Link } from 'react-router-dom';

export const Sidebar = () => {

  const [listsurah, setListSurah]= useState(null)

  const getSurahApi = async ()=>{
      await API.getSurah().then(res=>{
        setListSurah(res.data)
      })
  }

  useEffect(()=>{
    getSurahApi()
  })

  return (
    <div>
      <aside id="sidebar" className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                  { listsurah?.data?.map((items, index)=>{ 
                    return(
                      <li key={index}>      
                          <Link to={"/surah/"+items.number} className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group shadow-sm border cursor-pointer">
                              <div className="w-6 h-6 text-white text-xs justify-center items-center flex rounded-full bg-[#83D8BA]">
                                  {items.number}
                              </div>
                              <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                      <div className="flex flex-col items-start ml-2 ">
                                          <p className="text-gray-700">{items.name.transliteration.id}<span className="text-xs text-gray-500"> ({items.name.short})</span></p>
                                          <p className="text-gray-300 text-xs"> {items.name.translation.id} | {items.numberOfVerses} Ayat</p>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      </li>
                    )}   
                  )}
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
    </div>
  )
}
