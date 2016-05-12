import Relay from 'react-relay';

export default class DeleteCategoryMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL `fragment on Viewer {
      id
      categories {
        count
      }
    }`
  }

  getMutation(){
    return Relay.QL `mutation{deleteCategory}`
  }

  getVariables(){
    return {
      id: this.props.id
    }
  }

  getFatQuery(){
    return Relay.QL `
      fragment on deleteCategoryPayload {
        id
        viewer {
          id
          categories{
            count
          }
        }
      }
    `
  }

  getConfigs() {
    return [{
      type: 'NODE_DELETE',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: 'categories',
      deletedIDFieldName: 'id'
    }];
  }
}
