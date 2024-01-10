/** @type {import('next').NextConfig} */

  module.exports = {
    async redirects() {
      return [
        {
          source: '/about',
          destination: 'apps/web/index.html',
          permanent: true,
        },
      ]
    },
  }
;
