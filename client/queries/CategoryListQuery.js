import Relay from 'react-relay';

export default {
  categories: (Component) => Relay.QL`
  query {
    categories {
     ${Component.getFragment('categories')}
    }
  }`
}
