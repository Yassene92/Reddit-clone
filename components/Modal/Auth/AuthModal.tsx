'use client';
import { authModalState } from '@/atoms/authModalAtom';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';

const AuthModal = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () =>
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));

  return (
    <>
      <Transition appear show={modalState.open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="inset-0 flex justify-end">
                    <button type="button" className="" onClick={handleClose}>
                      <HiOutlineXMark />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="pl-3 text-lg font-medium leading-6 text-gray-900 "
                  >
                    {modalState.view === 'login' && 'Log In'}
                    {modalState.view === 'signup' && 'Sign Up'}
                    {modalState.view === 'resetPassword' && 'Reset Password'}
                  </Dialog.Title>
                  <div className="block p-4 mt-2">
                    <p className="text-xs text-blackl">
                      By continuing, you agree are setting up a Reddit account
                      and agree to our User Agreement and Privacy Policy.
                    </p>
                    <AuthInputs />
                    {/**  <OAuthButtons /> */}
                    {/**  <ResetPassword /> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AuthModal;
