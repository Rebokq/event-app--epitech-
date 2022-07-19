import { React, useState } from "react";

import Data from "./mock-data.json"

import { Link, useNavigate } from 'react-router-dom'

import { BsFillCalendarDateFill } from 'react-icons/bs'
function Research() {




    return (
        <div className="p-5 min-h-screen bg-slate-200	 ">
            <form>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required></input>
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            {Data.map((post) => (
                <div key={post.id}>


                    <div key={post.id} class="container my-12 mx-auto px-4 md:px-12">
                        <div class="flex flex-wrap -mx-1 lg:-mx-4">

                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">


                                <article class="overflow-hidden rounded-lg shadow-lg">

                                    <a href="#">
                                        <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                                    </a>

                                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 class="text-lg">
                                            <a class="no-underline hover:underline text-black uppercase text-2xl" href="#">
                                                {post.event_title}
                                            </a>
                                        </h1>
                                        <p class="text-grey-darker text-xl">
                                           by {post.event_name}
                                        </p>
                                    </header>
                                    <p>{post.event_description}</p>


                                    <footer class="flex items-center justify-between leading-none p-2 md:p-4 text-2xl">
                                        <a class="flex items-center no-underline hover:underline text-black" href="#">

                                            <BsFillCalendarDateFill />
                                            <p class="ml-2 text-xl ">

                                                {post.event_date}
                                            </p>
                                        </a>
                                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                            <span class="">{post.event_price} €</span>
                                            <i class="fa fa-heart"></i>
                                        </a>
                                        <a class="relative py-2 px-3 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">


                                            <Link to='/event'>Interested</Link>
                                        </a>

                                    </footer>

                                </article>


                            </div>



                        </div>




                    </div>
                </div>

            ))
            }

        </div>
    );
}

export default Research;