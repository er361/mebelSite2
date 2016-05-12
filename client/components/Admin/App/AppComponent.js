import React, {Component} from 'react';
import Link from 'react-router/lib/Link';
import Sidebar from '../Sidebar/SidebarComponent.js';

export default class AdminComponent extends Component {
  constructor(props){
    super(props);
    //console.log(props);
  }
  componentDidMount(){
    $('.ui.sidebar')
      .sidebar({
        context: $('.adminApp')
      });
  }
  render(){
    return(
      <div className="adminApp">
        <Sidebar/>
        <div className="pusher">
          <div className="ui basic segment">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
