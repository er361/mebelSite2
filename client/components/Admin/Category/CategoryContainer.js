import Relay from 'react-relay';
import CategoryComponent from './CategoryComponent.js';
import AddCategoryMutation from '../../../mutations/admin/category/AddCategoryMutation.js';

export default Relay.createContainer(CategoryComponent,{
  fragments:{
    viewer: () => Relay.QL`
    fragment on Viewer {
      ${AddCategoryMutation.getFragment('viewer')}
    }`
  }
})
