import Article from '@/components/Article';
import LayoutComponent from '@/components/LayoutComponent';
import axios from 'axios';

const TrendingNews = ({ data }) => {
  return (
    <LayoutComponent>
      <div className="w-full p-12 bg-white">
        <div className="flex items-end justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-4xl font-bold text-transparent text-gray-80 bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
              Lastest Stock Market News
            </p>
            <p className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
              Top News articles from India's Leading firms
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {data.map((article) => (
            <Article key={article._id} {...article} />
          ))}
        </div>
      </div>
    </LayoutComponent>
  );
};

export default TrendingNews;

export async function getServerSideProps() {
  const { data } = await axios.get(
    'https://api-stoclue.herokuapp.com/articles'
  );

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
