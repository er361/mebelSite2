import React from 'react';
import Relay from 'react-relay';

class MebelUnit extends React.Component {
  setCategoryId = (id) => {
    this.props.relay.setVariables ({
      categoryId: id
    })
  }
  render() {
    const { props: props, props: { mebel: mebel, viewer: {category: category } } } = this
    props.relay.setVariables({id: mebel.categoryId})
    return (
      <tr className='center aligned selec'>
        <td className='selectable' data-content="popass">{mebel.title}</td>
        <td>{mebel.price}</td>
        <td>{category.title}</td>
        <td>{mebel.img}</td>
        <td><div className="ui button">Удалить</div></td>
        <td><div className="ui button">Изменить</div></td>
      </tr>
    );
  }
}

export default Relay.createContainer( MebelUnit, {
  initialVariables: {id: '573d91762e2d7a480bff6c4f'},
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      category(id: $id){
        title
      }
    }
    `,
    mebel: () => Relay.QL `
    fragment on Mebel {
      title
      img
      categoryId
      price
    }`
  }
})
