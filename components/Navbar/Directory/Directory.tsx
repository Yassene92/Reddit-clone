'use client';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { TiHome } from 'react-icons/ti';

export default function Directory() {
  return (
    <div className="flex items-center justify-center px-1.5 ">
      <Menu as="div" className="relative inline-block text-right">
        <div>
          <Menu.Button className="h-8 px-1 border rounded hover:border-gray-300">
            <div className="flex items-center justify-center flex-grow mx-1 space-x-6 text-lg">
              <span className="items-center hidden font-semibold sm:flex ">
                <TiHome />
                Home
              </span>
              <HiChevronDown />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {/**<Communities/> */}
            Communities
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
