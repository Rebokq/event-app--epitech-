import React, { useState } from 'react';
import EventsData from "./mock-data.json"
import { Link, useNavigate } from 'react-router-dom'

import { BsFillCalendarDateFill } from 'react-icons/bs'

import { MdOutlineLocationOn } from 'react-icons/md'
// This holds a list of some fiction people
// Some  have the same name but different age and id
const EVENTS = EventsData;

function SearchBar() {
  const [showModal, setShowModal] = React.useState(false);

  // the value of the search field 
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
    <div className="p-4 container">


      <form>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" value={event_title} onChange={filter} id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..."></input>
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>

     
        {foundEvents && foundEvents.length > 0 ? (
          foundEvents.map((event) => (
          


              <div key={event.id}>
              <div className="flex flex-wrap -mx-1 lg:-mx-4">


                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                          <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                          <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black uppercase text-2xl" href="#">
                              {event.event_title}
                            </a>
                          </h1>
                          <p class="text-grey-darker text-xl">
                            by {event.event_name}
                          </p>
                        </header>

                        <p>{event.event_description}</p>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4 text-2xl">
                          <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <BsFillCalendarDateFill />
                            <p class="ml-2 text-xl ">
                              {event.event_date}
                            </p>
                          </a>
                          <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="">{event.event_price} €</span>
                            <i class="fa fa-heart"></i>
                          </a>
                          <a class="relative py-2 px-3 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <button onClick={() => setShowModal(true)}>Interested</button>
                          </a>
                        </footer>

                      </article>
                    </div>

                  </div>
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
    
  );
}

export default SearchBar;