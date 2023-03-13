'use client';

import Image from 'next/image';
import RightContent from './RightContent/RightContent';
import SearchBox from './SearchBox';

export default function Navbar() {
  return (
    <div className="flex bg-white h-11 pt-1.5 pb-3">
      <Image
        src="/images/redditFace.svg"
        alt="logo"
        width={0}
        height={0}
        className="w-auto h-auto "
        sizes="100vw"
        priority
      />
      <Image
        src="/images/redditText.svg"
        alt="logo"
        width={0}
        height={0}
        className="hidden w-auto h-auto sm:block "
        sizes="100vw"
        priority
      />

      <SearchBox />
      <RightContent />
      {/**<Directory/> */}
    </div>
  );
}
