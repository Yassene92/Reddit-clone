import { useState } from 'react';
import CreateComunityModal from '@/components/Modal/CraeteComunities/CrateComunityModal';
import { GrAdd } from 'react-icons/gr';
import { Menu } from '@headlessui/react';

export default function Communities() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <CreateComunityModal
        open={open}
        handleCloseModal={() => {
          setOpen(false);
        }}
      />
      <>
        <Menu.Items
          className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
          onClick={() => setOpen(true)}
        >
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-500  text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                {active ? (
                  <GrAdd className="w-5 h-5 mr-6" aria-hidden="true" />
                ) : (
                  <GrAdd className="w-5 h-5 mr-6" aria-hidden="true" />
                )}
                Create Community
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </>
    </div>
  );
}
