import { useState, useCallback } from 'react';
import Button from '@/components/elements/Button';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';
import { BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs';
import { HiLockClosed } from 'react-icons/hi';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, firestore } from '@/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

type CreateComunityModalProps = {
  open: boolean;
  handleCloseModal: () => void;
};

export default function CreateComunityModal({
  open,
  handleCloseModal,
}: CreateComunityModalProps) {
  const [user] = useAuthState(auth);
  const [communityName, setCommunityName] = useState('');
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [communityType, setCommunityType] = useState('publuc');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 21) return;
    setCommunityName(e.target.value);
    setCharsRemaining(21 - e.target.value.length);
  };

  const handleCommunityTypeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommunityType(e.target.name);
  };

  const handleCreateCommunity = async () => {
    if (error) setError('')
    //validate community name
    const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(communityName) || communityName.length < 3) {
      setError(
        'Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.'
      );
      return;
    }
    setLoading(true);
    try {
      // Check if community already exists
      const communityRef = doc(firestore, 'communities', communityName);
      const communityDoc = await getDoc(communityRef);
      if (communityDoc.exists()) {
        throw new Error(`r/${communityName} Community already exists!`);
      }
      // Create the community document in firestore
      await setDoc(communityRef, {
        creatorId: user?.uid,
        createdAt: serverTimestamp(),
        numberOfMembers: 1,
        privacyType: communityType,
      });
    } catch (error: any) {
      console.log('error creating community', error);
      setError(error.message);
    }
    setLoading(false);
  };
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
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
              <Dialog.Panel className="w-full max-w-xl p-4 text-left align-middle transition-all transform bg-white shadow-xl ovrflow-hidden rounded-2xl">
                <div className="inset-0 flex justify-end">
                  <button type="button" onClick={handleCloseModal}>
                    <HiOutlineXMark />
                  </button>
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-base font-medium leading-6 text-gray-900 border-b"
                >
                  Create a community
                </Dialog.Title>
                <div className="space-y-2">
                  <h3 className="my-1 text-base font-medium text-blackl">
                    Name
                  </h3>
                  <p className="text-xs font-normal text-gray-500 ">
                    Community names including capitalization cannot be changed.
                  </p>
                  <div className="items-start flex-grow mt-3 ">
                    <span className="relative text-gray-400 top-8 left-3">
                      r/
                    </span>
                    <input
                      value={communityName}
                      onChange={handleChange}
                      required
                      type="text"
                      className="w-full h-10 pl-6 pr-1 mb-2 bg-white border rounded"
                    />
                    <span
                      className={` pt-1 text-xs font-normal ${
                        charsRemaining === 0 ? 'text-redd' : 'text-gray-500  '
                      }`}
                    >
                      {charsRemaining} Characters remaining
                      <br />
                      <span className='text-redd'>{error}</span>
                    </span>
                  </div>
                </div>
                <div className="my-6 ">
                  <p className="py-3 text-base font-medium text-blackl">
                    Community type
                  </p>
                  {/*checkbox*/}
                  <ul className="space-y-3 list-inside ">
                    <li className="flex items-center ">
                      <input
                        type="checkbox"
                        name="publuc"
                        checked={communityType === 'publuc'}
                        onChange={handleCommunityTypeChange}
                      />
                      <BsFillPersonFill className="ml-2 text-gray-400" />
                      <label className="mx-2 text-sm font-medium">Public</label>
                      <span className="text-xs font-normal text-gray-500">
                        Anyone can view, post, and comment to this community
                      </span>
                    </li>
                    <li className="flex items-center ">
                      <input
                        type="checkbox"
                        name="restricted"
                        checked={communityType === 'restricted'}
                        onChange={handleCommunityTypeChange}
                      />
                      <BsFillEyeFill className="ml-2 text-gray-400" />
                      <label className="mx-2 text-sm font-medium">
                        Restricted
                      </label>
                      <span className="text-xs font-normal text-gray-500">
                        Anyone can view this community, but only approved users
                        can post
                      </span>
                    </li>
                    <li className="flex items-center ">
                      <input
                        type="checkbox"
                        name="private"
                        checked={communityType === 'private'}
                        onChange={handleCommunityTypeChange}
                      />
                      <HiLockClosed className="ml-2 text-gray-400" />
                      <label className="mx-2 text-sm font-medium">
                        Private
                      </label>
                      <span className="text-xs font-normal text-gray-500">
                        Only approved users can view and submit to this
                        community
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-end justify-end h-12 px-1 py-0 space-x-3 text-sm font-bold bg-gray-200">
                  <Button
                    variant="ring-primary"
                    className="w-20 h-7"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </Button>
                  <Button className="w-40 h-7" onClick={handleCreateCommunity}>
                    {loading ? 'Creating...' : 'Create Community'}
                  </Button>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
