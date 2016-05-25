import Relay from 'react-relay';

export default {
  category: (Component) => Relay.QL `
  query {
    category(id : $id ) {
      ${Component.getFragment('category')}
    }
  }`
}
