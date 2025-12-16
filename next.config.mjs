/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Optimize heavy libraries
  experimental: {
    optimizePackageImports: ['@amcharts/amcharts5', 'd3', 'chart.js', 'framer-motion', 'gsap'],
  },
  
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Optimize bundle splitting for heavy libraries
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          chart: {
            test: /[\\/]node_modules[\\/](@amcharts|chart\.js|d3|primereact)[\\/]/,
            name: 'chart',
            chunks: 'all',
            priority: 10,
          },
          animation: {
            test: /[\\/]node_modules[\\/](framer-motion|gsap)[\\/]/,
            name: 'animation',
            chunks: 'all',
            priority: 10,
          },
        },
      },
    };
    
    return config;
  },
};

export default nextConfig;