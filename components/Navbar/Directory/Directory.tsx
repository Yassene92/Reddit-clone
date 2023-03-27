import { Menu } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import { TiHome } from 'react-icons/ti';
import Communities from './Communities';

export default function Directory() {
  return (
    <div className="flex items-center justify-center px-1.5 ">
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button className="h-8 px-1 border rounded hover:border-gray-300">
            <div className="flex items-center justify-center flex-grow mx-1 text-sm ">
              <TiHome className="mr-2 text-xl" />
              <span className="items-center justify-between hidden mr-1 sm:mr-8 sm:flex">
                Home
              </span>
              <HiChevronDown />
            </div>
          </Menu.Button>
        </div>
        <Communities />
      </Menu>
    </div>
  );
}
