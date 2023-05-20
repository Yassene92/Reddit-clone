'use client';

import { authModalState } from '@/atoms/authModalAtom';
import { auth } from '@/firebase/clientApp';
import { useRouter, useParams } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsLink45Deg } from 'react-icons/bs';
import { FaReddit } from 'react-icons/fa';
import { IoImageOutline } from 'react-icons/io5';
import { useSetRecoilState } from 'recoil';

const CreatPostLink = () => {
  const router = useRouter();
  const params = useParams();
 

  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = () => {
    if (!user) {
      setAuthModalState({ open: true, view: 'login' });
      return;
    }
    const communityId = params.community;
    router.push(`/r/${communityId}/submit`);
  };
  return (
    <div className="flex items-center p-2 mb-1 bg-white border border-gray-300 rounded justify-evenly h-14">
      <FaReddit className="mr-1 text-4xl text-gray-300" />
      <input
        placeholder="Creat Post"
        className="w-full text-xs bg-gray-500 border border-blue-500 placeholder:text-gray-500 hover:bg-white focus:outline-none focus:bg-white focus:border-blue-500 h-14"
        onClick={() => {
          handleClick();
        }}
      />
      <IoImageOutline className="mr-1 text-2xl text-gray-400 cursor-pointer" />
      <BsLink45Deg className="text-2xl text-gray-400 cursor-pointer" />
    </div>
  );
};

export default CreatPostLink;
