'use client';

import Image from 'next/image';
import Link from 'next/link';
import RightContent from './RightContent/RightContent';
import SearchBox from './SearchBoxe/SearchBox';

export default function Navbar() {
  return (
    <div className="flex bg-white h-12 pt-1.5 pb-3 pl-4">
      <Link href={'/'} className="flex">
        <Image
          src="/images/redditFace.svg"
          alt="logo"
          width={48}
          height={48}
          className="w-auto h-auto "
          sizes="100vw"
          priority
        />
        <Image
          src="/images/redditText.svg"
          alt="logo"
          width={48}
          height={48}
          className="hidden w-auto h-auto sm:block "
          sizes="100vw"
          priority
        />
      </Link>
      <SearchBox />
      {/**<Directory/> */}
      <RightContent />
    </div>
  );
}
