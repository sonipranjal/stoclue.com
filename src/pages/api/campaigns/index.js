import axios from 'axios';
import Cors from 'cors';
import rateLimit from '../../../utils/rate-limit';
import initMiddleware from '../../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET'],
    origin: ['https://www.stoclue.com', /\.stoclue\.com$/],
  })
);

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

const handler = async (req, res) => {
  await cors(req, res);

  if (req.method === 'GET') {
    try {
      await limiter.check(res, 50, 'CACHE_TOKEN');

      const { data } = await axios.get(`${process.env.BASE_URL}/campaigns`, {
        auth: {
          username: process.env.MAIL_SERVER_USERNAME,
          password: process.env.MAIL_SERVER_PASSWORD,
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(429).json({ error });
    }
  } else {
    try {
      await limiter.check(res, 10, 'CACHE_TOKEN'); // 10 requests per minute
      return res.status(200).json('not allowed');
    } catch (err) {
      return res.status(429).json({ error: 'Rate limit exceeded' });
    }
  }
};

export default handler;
