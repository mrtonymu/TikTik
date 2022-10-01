/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "n.sinaimg.cn",
      "p16-amd-va.tiktokcdn.com",
      "image.shutterstock.com",
      "p16-sign-sg.tiktokcdn.com",
      'cdn.pixabay.com'
    ],
  },
};

module.exports = nextConfig;
