import React from 'react'
import Octagon from '../../assets/images/octagon.png'
import { JadwalSholat } from '../../components/JadwalSholat'

export const Surah = () => {
  return (
    <div className="justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
            <div>
                <div className="mb-3 rounded-lg bg-white p-6 shadow-md">
                    <div className="flex justify-between mb-8">
                        <button type="button" className="flex rounded-full bg-teal-500 text-sm">
                            <div className="h-9 w-9 p-2 text-white"></div>
                        </button>
                        <div className="flex justify-end">
                            <p className="font-bold text-lg mr-2"></p>
                            <img src={Octagon} width={35} heigth={35} alt="octagon"/>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        {/* icon */}
                    </div>
                    <p className="text-sm text-teal-500"></p>
                    <p className="text-gray-600 text-justify text-sm"></p>
                    <div className="hidden">
                        <h3 className="flex justify-start items-center my-3 "> <strong>Tafsir</strong></h3>
                        <p className="text-justify text-sm text-gray-600" ></p>
                    </div>
                </div>
            </div>
        </div>  
        <div className="rounded-lg md:w-1/3">
            <div className="mb-3 rounded-lg bg-white p-6 shadow-md">
                <h3 className="flex justify-start items-center mb-3"><strong>Tafsir</strong></h3>
                <p className="text-justify text-sm">Description </p>
            </div>  
            <JadwalSholat/>                      
        </div>
        
    </div>
  )
}
