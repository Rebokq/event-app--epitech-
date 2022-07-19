import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../assets/redRibbonLogo.png'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'EVENTS', href: '#', current: false },
  { name: 'ACCOUNT', href: '#', current: false },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Home = () => {

  return (
    
    <div className= " min-h-screen bg-cover bg-center bg-hero relative">


    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">

              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-xl font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button class="bg-white hover:bg-black hover:text-white text-xl font-bold py-2 px-4 rounded">
                 LOG IN
                </button>

                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  



        <div className="relative ">
            <div className="text-8xl text-white font-bold text-center outline-4 pt-20 "><p>Dating Event</p>
            <br/>
            <button class="h-12 px-6 m-2 text-2xl  text-indigo-100 transition-colors duration-150 bg-black rounded-full focus:shadow-outline hover:bg-red-700 hover:text-black	 border-white">Create Account</button>

            
                
            </div>
            <div className="flex jusitfy-center"></div>

        </div>
        
    </div>
  )
}

export default Home