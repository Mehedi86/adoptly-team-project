// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'i.postimg.cc',
//                 pathname: '/**',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'i.ibb.co',
//                 pathname: '/**',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'i.ibb.co.com',
//                 pathname: '/**',
//             }
//         ]
//     }
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {

 
    experimental: {
        optimizeCss: false
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;