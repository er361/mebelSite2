import Relay from 'react-relay';


export default class AddCategoryMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL `fragment on Viewer {
      id
      categories {
        count
      }
    }`
  }

  getMutation(){
    return Relay.QL`mutation {addCategory}`;
  }

  getVariables(){
    return {
      title: this.props.title
    }
  }

  getFatQuery(){
    return Relay.QL `
      fragment on addCategoryPayload {
        changedCategoryEdge
        viewer {
          categories {
            count
          }
        }
      }`
  }

  getConfigs() {
    return [
      {
        type: 'RANGE_ADD',
        parentName: 'viewer',
        parentID: this.props.viewer.id,
        connectionName: 'categories',
        edgeName: 'changedCategoryEdge',
        rangeBehaviors: {
          '': 'prepend'
        }
      }
    ]
  }

}
