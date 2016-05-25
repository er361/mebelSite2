import React from 'react';
import Relay from 'react-relay';
import MebelUnit from './MebelUnit.jsx';
import AddMebelMutation from '../../../mutations/admin/mebel/AddMebelMutation.jsx';

class MebelList extends React.Component {
  render() {
    const { props: props, props: { mebels: mebels } } = this
    return (
      <table className="ui  blue celled table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Категория</th>
            <th>Изорбражение</th>
            <th>Удалить</th>
            <th>Редактировать</th>
          </tr>
        </thead>
        <tbody>
          {mebels.edges.map(edge =>
          <MebelUnit viewer={props.viewer} key={edge.node.id} mebel={edge.node} />)}
        </tbody>
      </table>
    );
  }
}

export default Relay.createContainer(MebelList, {
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      ${MebelUnit.getFragment('viewer')}
    }`,
    mebels: () => Relay.QL `
    fragment on MebelConnection {
      edges {
        node {
          id
          ${MebelUnit.getFragment('mebel')}
        }
      }
    }`
  }
})
