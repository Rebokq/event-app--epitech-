import React, { useState }  from 'react'
import CloseIcon from '@mui/icons-material/Close';

import { BsFillCalendarDateFill } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai';

import EventsData from "../mock-data.json"
import {BrowserRouter as Router, Link} from 'react-router-dom';

//Filter
import items from "../mock-data.json"


const EVENTS = EventsData;

const allCategories = ['All', ...new Set(items.map(item => item.category))];
console.log(allCategories);




export const EventsNewCard = () => {
    const [showModal, setShowModal] = React.useState(false);

    // SEARCH BAR
    const [event_title, setName] = useState('');
    // the search result
    const [foundEvents, setFoundEvents] = useState(EVENTS);
    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
        const results = EVENTS.filter((event) => {
            return event.event_title.toLowerCase().startsWith(keyword.toLowerCase());
            // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundEvents(results);
        } else {
        setFoundEvents(EVENTS);
        // If the text field is empty, show all Events
        }
        setName(keyword);
    };



    return (
        <div>
            <form className='p-4'>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" value={event_title} onChange={filter} id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..."></input>
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <div class="container mx-auto p-10 md:py-20 px-5 md:p-10">
            
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">

                {foundEvents && foundEvents.length > 0 ? (
                    foundEvents.map((event) => (
                    <div key={event.id}>
                        <article class="mx-auto group w-full shadow-2xl max-w-md pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer" onClick={() => setShowModal(true)}>
                            <div class="content bg-cover bg-center h-64 rounded-2xl bg-[url('https://picsum.photos/600/400/?random')]">
                                <div class="flex items-end w-full h-full bg-black bg-opacity-20 text-white text-sm font-bold  p-4 rounded-2xl">
                                    <div class="w-1/2 flex items-center">
                                        
                                    <span class="bg-gray-100 text-gray-800 text-l font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{event.event_category}</span>
                                    </div>
                                    <div class="w-1/2 flex items-center flex-row-reverse">
                                        <svg class="w-6 h-6 ml-2 place-items-end group-hover:animate-ping absolute " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <svg class="w-6 h-6 ml-2 place-items-end relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <span class="place-items-end">16</span>
                                    </div>
                                </div>
                            </div>
                            <div class="my-5 p-4  text-center">
                                <h1 className='text-2xl '>{event.event_title}</h1>
                            </div>
                            <div class="my-3 p-4 flex">
                                <div className='w-full flex flex-start '>
                                    <BsFillCalendarDateFill className='text-black text-xl ' />

                                    <p className='text-align pl-2 text-xl'>{event.event_date}</p>
                                </div>

                                <div class="w-full flex justify-end">
                                    <p className='text-align pt-2 pr-1'>by {event.event_name}</p>
                                    <img class="w-10 h-10 rounded-full space-x-1" src="https://picsum.photos/600/400/?random" alt=""></img>
                                </div>

                            </div>

                            <div class="mt-6 px-4">

                                <div class="w-full flex justify-start space-x-1 text-align">
                                    <MdOutlineLocationOn className='text-black text-2xl ' />
                                    <p className='text-black pl-2 text-xl'>Los Angeles, California(CA), 90003</p>
                                </div>

                                <div class="my-5 pt-4 px-4 flex">
                                <p className='w-full flex flex-start text-2xl '>{event.event_price} €</p>
                                
                                <div class="w-full flex justify-end space-x-1">
                                    <button>
                                    <AiOutlineHeart className=' mr-2 text-xl'/>
                                    </button>
                                </div>
                            </div>

                                

                            </div>
                        </article>
                        </div>
                    ))
                    ) : (
                    <h1 className='pt-3 text-2xl'> 🤯 No results found!</h1>
                    )}

                    {/* Modal Box */}
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md rounded-xl "
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-zinc-800 outline-none focus:outline-none ">
                                        {/*header*/}
                                        <div className="content bg-cover bg-center h-64  bg-[url('https://picsum.photos/600/400/?random')] rounded-xl">

                                        </div>
                                        <div className="text-center justify-between pt-4 border-b border-solid border-slate-200 rounded-xl">
                                            <h3 className="text-3xl font-semibold text-white">
                                                Title
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    <p>×</p>
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}

                                        <div className="relative p-6 flex-auto">
                                            <h1 className='text-2xl text-white font-bold'>Description</h1>
                                            <p className="my-4 text-neutral-400 text-lg leading-relaxed">

                                                I always felt like I could do anything. That’s the main
                                                thing people are controlled by! Thoughts- their perception
                                                of themselves! They're slowed down by their perception of
                                                themselves. If you're taught you can’t do anything, you
                                                won’t do anything. I was taught I could do everything.
                                            </p>

                                            
                                            <h1 className='text-2xl text-white font-bold'>Line Up</h1>
                                                <div class="my-5 p-4 flex">
                                                    <div class="w-full flex justify-start space-x-2">
                                                        <div className='text-center'>
                                                        <Link to="/artist">
                                                        <img class="w-20 h-20 rounded-full" src="https://picsum.photos/600/400/?random" alt=""></img>
                                                        </Link>
                                                        <span className='text-white'>Offset</span>
                                                        </div>
                                                        
                                                        <img class="w-20 h-20 rounded-full" src="https://picsum.photos/600/400/?random" alt=""></img>
                                                        <img class="w-20 h-20 rounded-full" src="https://picsum.photos/600/400/?random" alt=""></img>
                                                    </div>
                                                </div>
                                          



                                            <h1 className='text-2xl text-white font-bold'>Info</h1>

                                            <div class="my-4 flex">
                                                <div class="w-full flex justify-start space-x-1">
                                                    <BsFillCalendarDateFill className='text-white text-xl ' />
                                                    <p className='text-white pl-2 text-xl '>Saturday 16 july</p>

                                                </div>
                                                <br />
                                            </div>

                                            <div class="w-full flex justify-start space-x-1">
                                                <MdOutlineLocationOn className='text-white text-2xl ' />
                                                <p className='text-white pl-2 text-xl'>Paris</p>
                                            </div>

                                        </div>


                                        <div className='p-6 flex space-x-2'>


                                        </div>


                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6  rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                            <button class="text-xl inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-amber-200 text-gray-700 rounded-xl">BOOK NOW FOR 55 €</button>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}



                   

                </div>
            
            </div>
        </div>
    )
}
