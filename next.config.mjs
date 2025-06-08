/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'api.sams-eatery.com',
              port: '',
              pathname: '/api/alluploads/**',
              search: '',
            }
          ],
          // unoptimized: true
      }
};

export default nextConfig;
