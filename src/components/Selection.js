import { useState, useRef, useEffect } from "react";

const Selection = ({ values, setValues }) => {
  const [open, setOpen] = useState(false);
  const elementRef = useRef();

  const handleClick = (type) => {
    setOpen((pre) => !pre);
    setValues((preValues) => ({
      ...preValues,
      investment_frequency: type === "Yearly" ? "Yearly" : "Monthly",
    }));
  };

  useEffect(() => {
    function handler(event) {
      if (!elementRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div>
      <div className="w-full">
        <div className="mt-1 relative">
          <button
            type="button"
            className="relative w-full bg-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left  cursor-pointer focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            ref={elementRef}
            onClick={() => setOpen((pre) => !pre)}
          >
            <span className="flex items-center">
              <span className="ml-3 block truncate">
                {values.investment_frequency}
              </span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          {open && (
            <div className="absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg">
              <ul
                tabIndex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-item-3"
                className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                <li
                  id="listbox-item-0"
                  role="option"
                  className="text-gray-900 hover:bg-yellow-500 hover:text-white select-none relative py-2 pl-3 pr-9 cursor-pointer"
                  onClick={() => handleClick("Yearly")}
                >
                  <div className="flex items-center">
                    <span className="ml-3 block font-normal truncate">
                      Yearly
                    </span>
                  </div>
                </li>
              </ul>
              <ul
                tabIndex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-item-3"
                className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                <li
                  id="listbox-item-0"
                  role="option"
                  className="text-gray-900 cursor-pointer hover:bg-yellow-500 hover:text-white select-none relative py-2 pl-3 pr-9"
                  onClick={() => handleClick("Monthly")}
                >
                  <div className="flex items-center">
                    <span className="ml-3 block font-normal truncate">
                      Monthly
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Selection;
