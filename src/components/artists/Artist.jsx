import React from 'react'
import ReactPlayer from "react-player"

const Artist = () => {
    return (
        <div className=''>
            <h1 className='text-2xl text-black font-bold'>Line Up</h1>

            <div class="flex flex-wrap justify-center">
                <div class="w-6/12 sm:w-4/12 px-4">
                    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-none" />
                    <h1 className='text-center text-6xl font-bold p-4'>Daft Punk</h1>
                </div>
            </div>

            <h1 className='text-4xl font-bold p-4 mt-8'>Bio</h1>


            <h1 className='text-4xl font-bold p-4 mt-8'>Next Event</h1>

            <div className='flex justify-center pt-16'>
                <img class=" rounded-xl w-196 h-96 " src="https://picsum.photos/600/400/?random" alt="..."  />

            </div>


        </div>

    )
}

export default Artist