import React from 'react';
import Relay from 'react-relay';
import DeleteCategoryMutation from '../../../../mutations/admin/category/DeleteCategoryMutation.js';
import UpdateCategoryMutation from '../../../../mutations/admin/category/UpdateCategoryMutation.js';
import CategoryUnitTextInput from './CategoryUnitTextInput.jsx';

var CategoryUnit = React.createClass({
  getInitialState(){
    return {
      isEditing: false
    }
  },
  handleDestoyClick(){
    //debug
    if(process.env.NODE_ENV == "development")
      console.log('delete');

    //delete category
    Relay.Store.commitUpdate(new DeleteCategoryMutation({
      id: this.props.category.id,
      viewer: this.props.viewer
    }))
  },
  handleEdit(){
    this.setState({
      isEditing: true
    });
    this.makeInput();
  },
  handleInputCancel(){
    this.setState({
      isEditing: false
    });
  },
  handleInputDelete(){
    this.setState({
      isEditing: false
    });
  },
  handleInputSave(text){
    Relay.Store.commitUpdate(new UpdateCategoryMutation ({
      id: this.props.category.id,
      title: text
    }))
    this.setState({
      isEditing: false
    });
  },
  makeInput(){
    let text = this.props.category.title;
    if (this.state.isEditing) {
        return(
          <CategoryUnitTextInput
            initialValue = {text}
            saveOnBlur = {true}
            onSave = {this.handleInputSave}
            onCancel = {this.handleInputCancel}
            onDelete = {this.handleInputDelete}/>

        )
    } else {
      return null;
    }
  },
  render(){
    let {id, title} = this.props.category;
    return(
        <div key={id} className="item">
          <div className="right floated content">
            <div onClick={this.handleEdit} className="ui tiny blue basic button">Edit</div>
            <div onClick={this.handleDestoyClick} className="ui tiny red basic button">Delete</div>
          </div>
          <div id={id} className="content">{this.state.isEditing ? null : title}{this.makeInput()}</div>
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
