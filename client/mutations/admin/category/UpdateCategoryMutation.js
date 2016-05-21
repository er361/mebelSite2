import Relay from 'react-relay';

export default class UpdateCategoryTitle extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation{updateCategory}`;
  }

  getVariables() {
    return {
      id: this.props.id,
      title: this.props.title
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on updateCategoryPayload {
        changedCategory {
          title
        }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        changedCategory: this.props.id
      }
    }];
  }

  getOptimisticResponse() {
    return {
      changedTodo: {
        id: this.props.id,
        title: this.props.title
      }
    };
  }
}
