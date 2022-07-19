import React from 'react'
import ReactPlayer from "react-player"

import {GrSoundcloud} from 'react-icons/gr'



const Artist = () => {

    const handleClick = () => {
        window.open("https://soundcloud.com/91666/696e-symphonie?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
      };

    return (
        <div className="bg-cover bg-[url('https://i.pravatar.cc/300')] text-white ">
        <div className='backdrop-blur-xl '>
            <h1 className='text-2xl text-black font-bold'>Line Up</h1>

            <div class="py-24 flex items-center justify-center space-x-8">
   <div class="w-36 h-36 bg-[url('https://i.pravatar.cc/300')] rounded-full object-contain"></div>
  
</div>
            <div className='text-center'> 
                <h1 className='text-center text-8xl font-bold p-4'>Daft Punk</h1>
                <button onClick={handleClick}> <GrSoundcloud class=" flex justify-center text-2xl "/> </button>
           </div>

            <div className='flex flex-wrap justify-center px-30 p-4 mt-8 '>
                <div className=''>
                    <h1 className='text-4xl font-bold uppercase'>👉 Next Event</h1>
                   

                
                   <button onClick={handleClick}> <img class=" flex rounded-xl w-230 h-130 pt-6 " src="https://picsum.photos/600/400/?random" alt="..."/>
                   <br/>
                   <p className='text-2xl font-bold'>Event title</p>

                   <div className='flex flex-start'>
                     <p className='text-2xl'>Place</p>
                    </div>

                    
                     <div className='flex inline'>
                        <p className='text-2xl text-red-600'>Date</p>
                        <p className='pl-4 text-2xl'>Price</p>
                        
                     </div>
                     </button>
                </div>
            </div>

            </div>
        </div>

    )
}

export default Artist