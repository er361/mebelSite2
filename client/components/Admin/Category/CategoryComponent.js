import React, {Component} from 'react';
import Relay from 'react-relay';
import AddCategoryMutation from '../../../mutations/admin/category/AddCategoryMutation.js';
import DeleteCategoryMutation from '../../../mutations/admin/category/DeleteCategoryMutation.js';
import CategoryListContainer from './CategoryListContainer.js';

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
  handleChange(e){
    this.setState({
      title: e.target.value
    });
  }
  componentWillReceiveProps(){
    if(process.env.NODE_ENV == "development")
      console.log(this.props);
  }
  handleClick(){
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
  handleKeyDown(){
    console.log('keydown');
  }
  render(){
    return(
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui action input">
            <input
              onKeyDown={this.handleKeyDown}
              type="text"
              value={this.state.title}
              onChange={this.handleChange.bind(this)}
              placeholder="Название категории"/>
            <button className="ui green button" onClick={this.handleClick.bind(this)}>Создать</button>
          </div>
        </div>
        <div className="five wide column">
          <CategoryListContainer viewer={this.props.viewer}  categories={this.props.viewer.categories} />
        </div>
      </div>
    )
  }
}
