import Link from 'next/link';

const FooterGrid = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
        <div>
          <p className="font-semibold tracking-wide text-gray-800">Premium</p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/trending-news">
                <a className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                  Stock News
                </a>
              </Link>
            </li>
            <li>
              <Link href="/trending-news">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Crypto News
                </a>
              </Link>
            </li>
            {/* <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Invest Virtual 
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                References
              </a>
            </li> */}
          </ul>
        </div>
        <div>
          <p className="font-semibold tracking-wide text-gray-800">
            Discussion
          </p>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Indian Stock Market
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Crypto 🚀
              </a>
            </li>
            {/* <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                General
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Entertainment
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Portfolio
              </a>
            </li> */}
          </ul>
        </div>
        <div>
          <p className="font-semibold tracking-wide text-gray-800">Stoclue</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="/about-us"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                About us
              </a>
            </li>
            <li>
              <Link href="/team">
                <a className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                  Team
                </a>
              </Link>
            </li>
            <li>
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                target="_blank"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Return & Refunds
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold tracking-wide text-gray-800">
            Contact us
          </p>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                312001, Chittorgarh, India
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                hello@stoclue.com
              </a>
            </li>
            {/* <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Wiki
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Forum
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterGrid;
