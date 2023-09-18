module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  sassOptions: {
    prependData: '@import "@styles/variables.scss";',
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/courses',
      },
    ]
  },

}