const noAuthenRoutes = [
  {
    path: '/login',
    exact: true
  },
  {
    path: '/register',
    exact: true
  }
]

const authenRoutes = [
  {
    path: '/',
    exact: true
  }
]

export { noAuthenRoutes, authenRoutes }