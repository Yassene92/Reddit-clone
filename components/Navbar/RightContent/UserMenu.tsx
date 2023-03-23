'use client';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { signOut, User } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';

import { FaRedditSquare } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { IoSparkles } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineLogin } from 'react-icons/md';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';

type UserMenuProps = {
  user?: User | null;
};

export default function UserMenu({ user }: UserMenuProps) {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <div className="flex items-center justify-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="px-1.5 rounded hover:border-gray-300 border">
            <div className="flex items-center justify-center ">
              {user ? (
                <>
                  <FaRedditSquare className="text-2xl text-gray-300 " />
                  <HiChevronDown />
                  <div className="flex-col items-start hidden mx-2 text-xs sm:flex">
                    <span>
                      {user?.displayName || user?.email?.split('@')[0]}
                    </span>
                    <div className="flex items-center">
                      <IoSparkles className="text-redd mr-0.5" />
                      <span className="text-gray-400 ">1 Karma</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <VscAccount className="text-2xl text-gray-400 mx-0.5" />
                  <HiChevronDown />
                </>
              )}
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
            {user ? (
              <>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <CgProfile
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        ) : (
                          <CgProfile
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        )}
                        Profile
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => {
                          signOut(auth);
                        }}
                      >
                        {active ? (
                          <MdOutlineLogin
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        ) : (
                          <MdOutlineLogin
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        )}
                        Log Out
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </>
            ) : (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() =>
                        setAuthModalState({
                          open: true,
                          view: 'login',
                        })
                      }
                    >
                      {active ? (
                        <MdOutlineLogin
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <MdOutlineLogin
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Log In / Sign In
                    </button>
                  )}
                </Menu.Item>
              </>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
