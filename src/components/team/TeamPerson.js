import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const TeamPerson = ({ name, img_url, about, linkedIn, twitter }) => {
  return (
    <div className="relative p-4 select-none">
      <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
        <Image
          alt={`{name}`}
          src={img_url}
          width={200}
          height={200}
          className="object-cover w-40 h-40 mx-auto border-2 border-yellow-800 rounded-lg"
        />
      </div>
      <div className="px-8 py-4 pt-24 rounded-lg shadow bg-gradient-to-tr from-yellow-400 via-yellow-500 to-yellow-600">
        <div className="text-center">
          <p className="text-2xl font-medium text-white">{name}</p>
          <p className="text-xl font-light text-white">Co-Founder</p>
          <p className="py-4 mx-auto font-light text-white text-md w-60">
            {about}
          </p>
        </div>
        <div className="flex items-center w-40 h-full pt-8 mx-auto text-yellow-800 border-t border-yellow-200 outline-none select-none focus:select-none justify-evenly">
          {twitter && (
            <FaTwitter
              onClick={() => window.open(twitter, '_blank')}
              className="text-3xl transition-colors duration-200 cursor-pointer hover:text-white"
            />
          )}
          {linkedIn && (
            <FaLinkedin
              onClick={() => window.open(linkedIn, '_blank')}
              className="text-3xl transition-colors duration-200 cursor-pointer hover:text-white"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamPerson;
