'use client';
import { AiOutlineSearch } from 'react-icons/ai';

type SearchBoxProps = {
  // placeholder?: string;
  //onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBox() {
  return (
    <div className="flex justify-center flex-grow ml-8 fitems-center ">
      <form action="" className="w-full max-w-md">
        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <AiOutlineSearch className="absolute w-5 h-5 ml-3 pointer-events-none" />
          <input
            type="text"
            name="search"
            placeholder="Search Reddit"
            autoComplete="off"
            className="w-full h-8 px-3 py-2 pl-10 pr-3 text-sm placeholder-gray-500 border outline-none bordegr-solid rounded-2xl ring-0 hover:ring-1 focus:ring-blue-500 ring-blue-500 bg-gray-50 text-[#lclcl] "
          />
        </div>
      </form>
    </div>
  );
}

{
  /**'use client';
import { AiOutlineSearch } from 'react-icons/ai';

type SearchBoxProps = {
  placeholder?: string;
  //onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBox({ placeholder }: SearchBoxProps) {
  return (
    <div className="flex justify-between px-20 space-x-6 border-b">
      <form action="" className="w-full max-w-md">
        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <AiOutlineSearch className="absolute w-5 h-5 ml-3 pointer-events-none" />
          <input
            type="text"
            name="search"
            placeholder="Search Reddit"
            autoComplete="off"
            className="w-full px-3 py-2 pl-10 pr-3 font-semibold text-black placeholder-gray-400 border-none rounded-2xl ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          />
        </div>
      </form>
    </div>
  );
}
 */
}
