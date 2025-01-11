/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["www.shutterstock.com",'localhost','strapi.payppy.co']
    },
    // output:'export',
    productionBrowserSourceMaps: false,
};

export default nextConfig;
