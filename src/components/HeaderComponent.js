import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { IoRocketSharp } from 'react-icons/io5';

const navigation = [
  { name: 'Finance Blog', href: 'https://blog.stoclue.com' },
  { name: 'Return Calculators', href: '/calculators' },
  { name: 'News', href: '/trending-news' },
  // { name: "Stock Discussions", href: "/ComingSoon" },
  // { name: 'Best Discount Brokers in India', href: '/ComingSoon' },
  { name: 'Log in', href: '/login' },
  // { name: 'Register', href: '/register' },
];

const HeaderComponent = () => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <div className="relative px-4 py-2 pt-6 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href="/">
                    <a>
                      <span className="sr-only">Home</span>
                      <img
                        className="w-auto h-8 sm:h-10"
                        src="/assets/rupee.png"
                      />
                    </a>
                  </Link>
                  <div className="flex items-center -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-yellow-500 bg-white rounded-md hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                      <span className="sr-only">Open main menu</span>
                      <HiOutlineMenu className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="z-10 font-medium text-yellow-600 transition hover:text-yellow-700 ">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="w-auto h-8"
                      src="/assets/rupee.png"
                      alt="logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-yellow-500 bg-white rounded-md hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                      <span className="sr-only">Close main menu</span>
                      <HiX className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default HeaderComponent;
