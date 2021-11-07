import axios from 'axios';
import Cors from 'cors';
import { validateEmail } from '../../utils';
import rateLimit from '../../utils/rate-limit';
import initMiddleware from '../../lib/init-middleware';
import jwt from 'jsonwebtoken';

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['POST'],
    origin: ['https://www.stoclue.com', /\.stoclue\.com$/],
  })
);

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

const handler = async (req, res) => {
  await cors(req, res);

  if (req.method === 'POST') {
    const { email, name, token } = req.body;

    if (!validateEmail(email) || !name || !token) {
      return res.status(400).json({ error: 'unexpected error' });
    }

    try {
      await limiter.check(res, 10, 'CACHE_TOKEN'); // 10 requests per minute

      const decoded_token = jwt.verify(token, process.env.SECRET_KEY);

      if (decoded_token !== 'stocluemailboi') {
        return res.status(403).json({ error: 'unauthenticated' });
      }

      const { data } = await axios.post(
        `${process.env.BASE_URL}/subscribers`,
        {
          email,
          name,
          status: 'enabled',
          lists: [3],
          preconfirm_subscriptions: true,
        },
        {
          auth: {
            username: process.env.MAIL_SERVER_USERNAME,
            password: process.env.MAIL_SERVER_PASSWORD,
          },
        }
      );
      return res.status(200).json(data);
    } catch (error) {
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
