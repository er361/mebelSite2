import React, {Component} from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import AddCategoryMutation from '../../../mutations/admin/category/AddCategoryMutation.js';
import DeleteCategoryMutation from '../../../mutations/admin/category/DeleteCategoryMutation.js';
import CategoryListContainer from './CategoryListContainer.js';

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

export default class Category extends Component {
  constructor(props){
    super(props);
    //debug
    if(process.env.NODE_ENV == 'development')
      console.log(props);

    this.state = {
      title: ''
    };
  }
  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }
  componentWillReceiveProps(){
    if(process.env.NODE_ENV == "development")
      console.log(this.props);
  }
  handleAddCategoryClick = () => {
    //debug
    if(process.env.NODE_ENV == 'development')
      console.log({text:this.state.title})

    //title (не забыть добавить валидацию)
    var title = this.state.title;

    //add category
    Relay.Store.commitUpdate(new AddCategoryMutation({
      title: title,
      viewer: this.props.viewer
    }));

    //clear field
    this.setState({
      title: ''
    });
  }
  handleKeyDown = (e) => {
    if(e.keyCode == ESC_KEY_CODE)
      this.handleBlur();
      else if (e.keyCode == ENTER_KEY_CODE) {
        this.handleAddCategoryClick();
      }
  }
  handleBlur(){
    this.refs.categoryAdd.blur();
  }
  render(){
    return(
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui action input">
            <input
              ref='categoryAdd'
              type="text"
              onKeyDown={this.handleKeyDown}
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Название категории"/>
            <button className="ui green button" onClick={this.handleAddCategoryClick}>Создать</button>
          </div>
        </div>
        <div className="five wide column">
          <CategoryListContainer viewer={this.props.viewer}  categories={this.props.viewer.categories} />
        </div>
      </div>
    )
  }
}
