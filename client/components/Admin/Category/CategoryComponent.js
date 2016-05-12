import React, {Component} from 'react';
import Relay from 'react-relay';
import AddCategoryMutation from '../../../mutations/admin/category/AddCategoryMutation.js';

export default class Category extends Component {
  constructor(props){
    super(props);
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
  render(){
    return(
      <div className="ui action input">
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange.bind(this)}
          placeholder="Название категории"/>
        <button className="ui green button" onClick={this.handleClick.bind(this)}>Создать</button>
      </div>
    )
  }
}
