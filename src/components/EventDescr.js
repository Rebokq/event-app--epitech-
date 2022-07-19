
import React from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineClockCircle } from "react-icons/ai";
import { VscChecklist } from "react-icons/vsc";
import { FaAngellist } from "react-icons/fa"
import { FaTicketAlt } from "react-icons/fa"
import { BsFillCalendarDateFill } from 'react-icons/bs'

import Data from "./mock-data.json"
import Footer from "./Footer"


const EventDescr = (toggle, settoggle) => {
    return (


        <div className='min-h-screen  bg-slate-200 '>
            <div className=" p-4 bg-slate-300  flex flex-col ease-linear duration-300 md:flex-row-reverse">
                <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
                    <div className=" text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
                        <h1>FREE</h1>
                    </div>
                    <div className="h-full w-full relative border-2 border-white rounded-2xl">
                        <img
                            src="https://picsum.photos/600/400/?random"
                            alt="thumbnail"
                            layout="fill"
                            objectFit="cover"
                            className=" rounded-2xl"
                        />
                    </div>
                </div>

                <div className=" h-full w-full mr-2 rounded-2xl ">
                    <div>
                        <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">Advanced</p>
                        <h1 className="m-2 text-4xl font-bold dark:text-black uppercase">
                            coachella
                        </h1>

                        <div className='flex flex-row items-center m-2 text-left'>
                            <p>The Coachella Valley Music and Arts Festival commonly called the Coachella Festival or simply Coachella
                                is an annual music and arts festival held at the Empire Polo Club in Indio, California, in the Coachella Valley in the Colorado Desert.</p>
                        </div>

                        <div className=" pt-16 pr-2 pl-2 flex flex-row justify-around flex-wrap">

                            <div className="flex flex-row items-center m-2">
                                <AiOutlineClockCircle size={20} className="dark:text-black" />
                                <h1 className="pl-1 dark:text-balck">17 Juillet</h1>
                            </div>
                            <div className="flex flex-row items-center m-2">
                                <VscChecklist size={20} className="dark:text-black" />
                                <h1 className="pl-1 dark:text-black">Participants</h1>
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <button className="md:m-2 m-auto mt-8 bg-[#5865F2] shadow-md shadow-[#5865f28a]  pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                                <FaAngellist className="animate-ping" size={15} color="#fff" />
                                <h1 className="text-white text-md font-semibold pl-2">
                                    Interested
                                </h1>
                            </button>
                            <button className="md:m-2 m-auto mt-8 bg-[#5865F2] shadow-md shadow-[#5865f28a]  pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                                <FaTicketAlt className="" size={15} color="#fff" />
                                <h1 className="text-white text-md font-semibold pl-2">
                                    Book Now 25 €
                                </h1>
                            </button>

                        </div>
                    </div>
                </div>



            </div>
            <div className="p-5 min-h-screen bg-slate-200">

                <h1 className='text-2xl'>Tickets</h1>
                {Data.map((post) => (
                    <div key={post.id}>

                        <div class="p-10">
                            <div class=" w-full lg:max-w-full lg:flex">
                                <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('https://picsum.photos/600/400/?random')] " title="Mountain">
                                </div>
                                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div class="mb-8">

                                        <div class="text-gray-900 font-bold text-xl mb-2">{post.event_title}</div>
                                        <p class="text-gray-700 text-base">{post.event_description}</p>
                                    </div>
                                    <div class="flex items-center">
                                        <img class="w-10 h-10 rounded-full mr-4" src="https://picsum.photos/600/400/?random" alt="Avatar of Writer"></img>
                                        <div class="text-sm">
                                            <p class="text-gray-900 leading-none">{post.event_name}</p>
                                            <p class="text-gray-600">{post.event_date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                ))
                }

            </div>


            
            <Footer/>

        </div>
        


    )
}

export default EventDescr



