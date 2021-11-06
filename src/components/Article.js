import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Article = ({ image_url, description, title, createdAt, source_url }) => {
  return (
    <div>
      <div className="m-auto overflow-hidden transition-all transform rounded-lg shadow-lg cursor-pointer hover:scale-105 h-90 w-80 md:w-90">
        <a href={source_url} target="_blank" className="block w-full h-full">
          {image_url && (
            <img
              alt="blog photo"
              src={image_url}
              className="object-cover w-full max-h-40"
            />
          )}
          <div className="w-full p-4 bg-white group bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-500 dark:bg-gray-800 ">
            <p className="mb-2 text-xl font-medium text-gray-800 group-hover:text-yellow-800 dark:text-white">
              {title.slice(0, 100)}
            </p>
            <p className="font-light text-gray-400 group-hover:text-yellow-700 dark:text-gray-300 text-md">
              {description.slice(0, 300) + '...'}
            </p>
            <div className="flex items-center mt-4">
              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="text-gray-400 group-hover:text-yellow-600 dark:text-gray-300">
                  {dayjs(createdAt).fromNow()}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Article;
