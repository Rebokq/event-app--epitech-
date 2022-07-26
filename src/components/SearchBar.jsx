import React, { useState } from 'react';
import EventsData from "./mock-data.json"
import { Link, useNavigate } from 'react-router-dom'

import { BsFillCalendarDateFill } from 'react-icons/bs'
// This holds a list of some fiction people
// Some  have the same name but different age and id
const EVENTS = EventsData;

function SearchBar() {
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
          <input type="search" value={event_title} onChange={filter} id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input>
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>

      <div className="event-list">
        {foundEvents && foundEvents.length > 0 ? (
          foundEvents.map((event) => (

            <div key={event.id}>

              <div class="container my-12 mx-auto px-4 md:px-12  -mx-1 lg:-mx-4">
                <div class="flex flex-wrap">

                  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <article class="overflow-hidden rounded-lg shadow-lg">

                      <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                      </a>

                      <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                            Article Title
                          </a>
                        </h1>
                        <p class="text-grey-darker text-sm">
                          11/1/19
                        </p>
                      </header>

                      <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                          <p class="ml-2 text-sm">
                            Author Name
                          </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                        </a>
                      </footer>

                    </article>

                  </div>




                </div>
              </div>


            </div>


          ))
        ) : (
          <h1>No results found!</h1>
        )
        
        }
      </div>
        


    </div>
  );
}

export default SearchBar;