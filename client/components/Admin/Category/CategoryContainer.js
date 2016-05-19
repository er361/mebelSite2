import Relay from 'react-relay';
import CategoryComponent from './CategoryComponent.js';
import AddCategoryMutation from '../../../mutations/admin/category/AddCategoryMutation.js';
import CategoryListContainer from './CategoryListContainer.js';
//import DeleteCategoryMutation from '../../../mutations/admin/category/DeleteCategoryMutation.js';

export default Relay.createContainer(CategoryComponent, {
  prepareVariables(){
    return{
      limit: 100
    }
  },
  fragments:{
    viewer: () => Relay.QL`
    fragment on Viewer {
      ${CategoryListContainer.getFragment('viewer')}
      categories (first: $limit){
        ${CategoryListContainer.getFragment('categories')}
      }
      ${AddCategoryMutation.getFragment('viewer')}
    }`
  }
})
