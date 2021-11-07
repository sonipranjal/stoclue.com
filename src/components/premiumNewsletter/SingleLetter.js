import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import HtmlToReactParser from 'html-to-react';
import axios from 'axios';
import { Auth } from 'aws-amplify';
import Link from 'next/link';

const parser = HtmlToReactParser.Parser;
const htmlToReactParser = new parser();

const SingleLetter = ({ id }) => {
  const [campaign, setCampaign] = useState({});
  const [loading, setLoading] = useState(true);

  const { isReady } = useRouter();
  const router = useRouter();

  const loadPremiumContent = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/campaigns/${id}`
      );
      setCampaign(data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setCampaign(null);
      setLoading(false);
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
    if (!isReady) {
      return;
    }
    (async function () {
      const user = await checkExistingUser();
      if (!user) return;
      await loadPremiumContent();
    })();
  }, [isReady]);

  return (
    <div className="flex flex-col items-center h-full">
      <Toaster />
      {loading && (
        <div className="flex flex-col w-full h-full p-2 mx-10 mt-10 bg-white select-none sm:p-4 rounded-2xl sm:flex-row">
          <div className="flex flex-col items-center flex-1 sm:p-2">
            <div className="container flex flex-col flex-1 p-4">
              <div className="w-full mb-10 bg-gradient-to-r from-yellow-300 to-yellow-500 h-28 animate-pulse rounded-2xl"></div>
              <div className="w-full bg-gradient-to-r from-yellow-300 to-yellow-500 h-52 animate-pulse rounded-2xl"></div>
            </div>
          </div>
        </div>
      )}

      {!loading &&
        (!campaign ? (
          <div className="flex flex-col w-full h-full p-2 mx-10 mt-10 bg-white sm:p-4 rounded-2xl sm:flex-row">
            <div className="flex flex-col items-center flex-1 sm:p-2">
              <div className="container flex flex-col items-center flex-1 p-4 prose lg:prose-xl">
                <div
                  onClick={() => router.push('/premium-newsletter')}
                  className="px-6 py-2 font-mono text-lg font-medium text-white transition ease-in-out transform border-0 rounded cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-500 focus:outline-none motion-reduce:transform-none hover:scale-110 hover:bg-yellow-500"
                >
                  Go Home!
                </div>
                <div className="pt-4 rounded-2xl">Not Available</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full h-full p-2 mx-10 mt-10 bg-white select-none sm:p-4 rounded-2xl sm:flex-row">
            <div className="flex flex-col items-center flex-1 sm:p-2">
              <div className="container flex flex-col flex-1 p-4 prose lg:prose-xl">
                <h2 className="mb-5 rounded-2xl">{campaign.subject}</h2>
                <div className="p-4 rounded-2xl">
                  {htmlToReactParser.parse(
                    campaign.body.replace(/\{\{.*\}\}/g, '')
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleLetter;
