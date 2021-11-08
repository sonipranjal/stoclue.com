module.exports = {
  images: {
    domains: ["images.unsplash.com", "images.pexels.com", "image.freepik.com"],
  },
  env: {
    BASE_URL=process.env.BASE_URL,
    NEXT_PUBLIC_BASE_URL=process.env.NEXT_PUBLIC_BASE_URL,
    MAIL_SERVER_PASSWORD=process.env.MAIL_SERVER_PASSWORD,
    MAIL_SERVER_USERNAME=process.env.MAIL_SERVER_USERNAME,
    NEXT_PUBLIC_SECRET_KEY=process.env.NEXT_PUBLIC_SECRET_KEY,
    SECRET_KEY=process.env.SECRET_KEY
  }
};
