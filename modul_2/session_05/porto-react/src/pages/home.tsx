import React from "react";
import BiodataCard from "../components/BiodataCard";
import {FiUser,FiHome, FiPhone, FiMail, FiLinkedin, FiMap, FiWifi, } from "react-icons/fi"
import dataBio from "../constants/databio"
import { Heading } from "@chakra-ui/react";
import asn from "../assets/images/asn.jpeg"



const handleIcon = (name: string)=>{

    switch(name){

        case "phone" : 
            return <FiPhone />

        case "email" : 
            return <FiMail />

        case "linkedin":
            return <FiLinkedin />

        case "map" :
            return <FiMap />

        case "web" : 
            return <FiWifi />

        case "home":
          return <FiHome/>

        default :
            return <FiUser />

    }

}


export default function Biodata(){

    return (
      <>
        <div className="w-screen min-h-screen flex flex-col p-[30px] bg-[#212121] text-blue-600 overflow-hidden  mx-auto">

            <Heading className="text-center">Biodata</Heading>
            <div className="mt-[50px] flex flex-col justify-center items-center relative">
                <img src={asn} alt="" className="rounded-full w-[400px] h-[450px] object-cover" />

                <div className="w-[415px] h-[460px] border-[5px] border-gray-700 rounded-full border-dashed absolute"></div>
            </div>

            <div className="flex flex-col gap-10 mt-6 mb-[100px]">
                {dataBio.map((item)=>{
                    return (
                        <BiodataCard 
                            label={item.label} 
                            value={item.value} 
                            icons={handleIcon(item.icons)} 
                            link={item.link} 
                            key={item.id}
                        />
                    )
                })}
            </div>

        </div>
      </>
    )
}