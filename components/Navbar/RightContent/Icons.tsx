'use client';
import { BsArrowUpRightCircle, BsChatDots } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from 'react-icons/io5';

export default function Icon() {
  return (
    <div className="flex">
      <div className="items-center justify-center hidden px-1 mr-1 border border-gray-200 sm:flex">
        <BsArrowUpRightCircle className="text-2xl text-gray-500 cursor-pointer hover:bg-gray-200 mx-0.5 rounded-2xl  " />
        <IoFilterCircleOutline className="text-2xl text-gray-500 cursor-pointer hover:bg-gray-200 mx-0.5 rounded-2xl  " />
        <IoVideocamOutline className="text-2xl text-gray-500 cursor-pointer hover:bg-gray-200 mx-0.5 rounded-2xl  " />
      </div>
      <>
        <BsChatDots className="text-xl text-gray-500 cursor-pointer hover:bg-gray-200 mx-0.5 rounded-2xl  " />
        <IoNotificationsOutline className="text-xl text-gray-500 cursor-pointer hover:bg-gray-200 mx-0.5 rounded-xl  " />
        <GrAdd className="text-2xl text-gray-400 cursor-pointer hover:bg-gray-200 mx-0.5 rounded-2xl sm:flex hidden " />
      </>
    </div>
  );
}
