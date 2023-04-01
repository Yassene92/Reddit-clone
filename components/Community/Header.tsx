'use client';
import { Community } from '@/atoms/commuityAtom';
import Image from 'next/image';
import { FaReddit } from 'react-icons/fa';
import Button from '../elements/Button';

type HeaderProps = {
  communityData: Community;
};

export default function Header({ communityData }: HeaderProps) {
  const isJoined = false; //read from our communitySnippet
  
  return (
    <div className="flex flex-col w-full h-36">
      <div className="bg-blue1 h-1/2 " />
      <div className="flex justify-center flex-grow bg-white">
        <div className="flex w-full max-w-5xl ">
          {communityData.imageUrl ? (
            <Image src={communityData.imageUrl} alt="community image" fill />
          ) : (
            <FaReddit className="relative text-blue-500 border-4 border-white border-solid text-7xl rounded-t-5xl -top-3" />
          )}

          <div className="flex-col py-2 mx-2">
            <h3 className="text-base font-extrabold">{communityData.id}</h3>
            <span className="text-xs font-medium text-gray-400 ">
              r/{communityData.id}
            </span>
          </div>
          <div className="px-2 py-2">
            <Button className="w-24 h-7"
            onClick={() => {
              console.log('clicked');
            }}
            >
              {isJoined ? 'Joined' : 'join'}{' '}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
