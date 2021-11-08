import LayoutComponent from '@/components/LayoutComponent';
import axios from 'axios';
import Newsletter from '@/components/premiumNewsletter/Newsletter';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const PremiumNewsletterPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const loadPremiumContent = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/campaigns`
      );
      setCampaigns(data.data.results);
      setLoading(false);
      return;
    } catch (err) {
      toast.error('Check back later!');
      console.error(err);
      setLoading(false);
      return;
    }
  };

  const checkExistingUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return user;
    } catch (err) {
      toast.error('Please login first to view the premium content');
      router.push('/login');
    }
  };

  useEffect(() => {
    (async function () {
      const user = await checkExistingUser();
      if (!user) return;
      await loadPremiumContent();
    })();
  }, []);

  return (
    <LayoutComponent>
      <Toaster />
      <div className="w-full p-12 bg-white">
        <div className="flex items-end justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-4xl font-bold text-transparent text-gray-80 bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
              Previous Newsletters
            </p>
            <p className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
              High Quality Daily Newsletters straight into your Mailbox
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {!loading &&
            campaigns
              .filter((campaign) => {
                return campaign.lists.some((list) => list.id === 3);
              })
              .map((campaign) => (
                <Newsletter key={campaign.id} {...campaign} />
              ))}
          {loading && (
            <div className="w-full text-center">
              <AiOutlineLoading3Quarters
                className="w-32 h-32 text-yellow-500 animate-spin group-hover:text-yellow-400"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </div>
    </LayoutComponent>
  );
};

export default PremiumNewsletterPage;
