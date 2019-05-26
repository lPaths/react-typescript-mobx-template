import Loadable from 'react-loadable'

export const LoadableComponent = importComponent => Loadable({
  loader: () => importComponent,
  loading: () => null
})
