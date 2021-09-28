import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Article = ({ image_url, description, title, createdAt, source_url }) => {
  return (
    <div>
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
        <a href={source_url} target="_blank" className="block w-full h-full">
          {image_url && (
            <img
              alt="blog photo"
              src={image_url}
              className="object-cover w-full max-h-40"
            />
          )}
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              {title}
            </p>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              {description}
            </p>
            <div className="flex items-center mt-4">
              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="text-gray-400 dark:text-gray-300">
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
