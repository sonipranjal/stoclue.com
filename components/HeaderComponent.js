import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const navigation = [
  { name: "Finance Blog", href: "https://blog.stoclue.com" },
  { name: "Return Calculators", href: "/ComingSoon" },
  { name: "Trending News 🚀", href: "/ComingSoon" },
  // { name: "Stock Discussions", href: "/ComingSoon" },
  { name: "Best Discount Brokers in India", href: "/ComingSoon" },
];

const HeaderComponent = () => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <div className="relative py-2 pt-6 px-4 sm:px-6 lg:px-8">
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
                        className="h-8 w-auto sm:h-10"
                        src="/assets/rupee.png"
                      />
                    </a>
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                      <span className="sr-only">Open main menu</span>
                      <HiOutlineMenu className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className="font-medium text-gray-600 hover:text-yellow-500 
                      transition 
                    "
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                {/* <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </a> */}
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
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/assets/rupee.png"
                      alt="logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                      <span className="sr-only">Close main menu</span>
                      <HiX className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
                {/* <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
                </a> */}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default HeaderComponent;
