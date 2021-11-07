import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';

const Newsletter = ({ name, id }) => {
  return (
    <div>
      <div className="m-auto overflow-hidden transition-all transform rounded-lg shadow-lg cursor-pointer hover:scale-105 h-90 w-80 md:w-90">
        <Link
          href={`/premium-newsletter/${id}`}
          className="block w-full h-full"
        >
          <div className="w-full p-4 bg-white group bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-500 dark:bg-gray-800 ">
            <p className="mb-2 text-xl font-medium text-gray-800 group-hover:text-yellow-800 dark:text-white">
              {name.slice(0, 100)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Newsletter;
