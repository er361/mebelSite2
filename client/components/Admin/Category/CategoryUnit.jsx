import React from 'react';
import Relay from 'react-relay';
import DeleteCategoryMutation from '../../../mutations/admin/category/DeleteCategoryMutation.js';

var CategoryUnit = React.createClass({
  handleDestoyClick(){
    if(process.env.NODE_ENV == "development")
      console.log('delete');
    Relay.Store.commitUpdate(new DeleteCategoryMutation({
      id: this.props.category.id,
      viewer: this.props.viewer
    }))
  },
  render(){
    let {id, title} = this.props.category;
    return(
      <div key={id} className="item">
        <div className="right floated content">
          <div onClick={this.handleEdit} className="ui tiny blue basic button">Edit</div>
          <div onClick={this.handleDestoyClick} className="ui tiny red basic button">Delete</div>
        </div>
        <div  className="bottom aligned content">{title}</div>
      </div>
    )
  }
})

export default Relay.createContainer(CategoryUnit, {
  fragments:{
    viewer: () => Relay.QL `
    fragment on Viewer {
      ${DeleteCategoryMutation.getFragment('viewer')}
    }`,
    category: () => Relay.QL `
    fragment on Category {
      id
      title
    }`
  }
})
