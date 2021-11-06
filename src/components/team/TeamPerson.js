import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamPerson = ({ name }) => {
  return (
    <div className="relative p-4">
      <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
        <a href="#" className="relative block">
          <img
            alt="profil"
            src="/images/person/2.jpeg"
            className="object-cover w-40 h-40 mx-auto border-2 border-yellow-800 rounded-lg"
          />
        </a>
      </div>
      <div className="px-8 py-4 pt-24 rounded-lg shadow bg-gradient-to-tr from-yellow-400 to-yellow-500">
        <div className="text-center">
          <p className="text-2xl text-white ">{name}</p>
          <p className="text-xl font-light text-white">Lead dev</p>
          <p className="py-4 mx-auto font-light text-white text-md w-60">
            Charlie, born December 18, 1993 in Challans, is an imitator and
            pintor.
          </p>
        </div>
        <div className="flex items-center w-40 pt-8 mx-auto text-yellow-800 border-t border-yellow-200 cursor-pointer justify-evenly">
          <FaTwitter className="text-3xl transition-colors duration-200 hover:text-white" />
          <FaLinkedin className="text-3xl transition-colors duration-200 hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default TeamPerson;
