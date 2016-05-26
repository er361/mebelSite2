import React from 'react';
import Relay from 'react-relay';
import MakeInputTable from './MakeInputTable.jsx';

class MebelUnit extends React.Component {
  state = {
    text: '',
    isEditing: false
  }
  handleClick = (e) => {
    e.preventDefault();
  }
  handleEdit = () => {
    this.setState({
      isEditing: true
    })
  }
  handleCancel = () => {
    this.setState({
      isEditing: false
    });
  }
  makeInput = (data) => {
    if(this.state.isEditing){
      return(
        <MakeInputTable
          data={data}
          onCancel={this.handleCancel}/>
        )
    } else {
      return null;
    }
  }

  makeCell = (data) => {
    return(
      <td onClick={this.handleEdit} className='selectable'>
        <a onClick={this.handleClick}  href="">{this.state.isEditing ? null : data}</a>
        {this.makeInput(data)}
      </td>
    )
  }
  render() {
    const { props: props, props: { mebel: mebel, viewer: {category: category } } } = this
    props.relay.setVariables({id: mebel.categoryId})
    return (
      <tr>
        {this.makeCell(mebel.title)}
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
      id
      title
      img
      categoryId
      price
    }`
  }
})
