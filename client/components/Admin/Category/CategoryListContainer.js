import Relay from 'react-relay';
import CategoryListComponent from './CategoryListComponent.js';
import CategoryUnit from './CategoryUnit/CategoryUnit.jsx';

export default Relay.createContainer(CategoryListComponent, {
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      ${CategoryUnit.getFragment('viewer')}
    }
    `,
    categories : () => Relay.QL`
      fragment on CategoryConnection {
        edges {
          node {
            id
            ${CategoryUnit.getFragment('category')}
          }
        }
      }
    `
  }
})
