module.exports = {
  env: {
    appName: 'Learn Nextjs'
  },

  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/register',
        destination: '/auth/register',
      },
    ]
  }
}
