import React,{Component} from 'react';
import {Link} from 'react-router';

export default class rootApp extends Component {
  render(){
    return(
      <div className="rootApp">
        <div className="ui menu">
          <div className="header item">
            Mebel na zakaz
          </div>
            <Link className="item" to='/'>Home</Link>
            <Link className="item" to='admin'>Admin</Link>
        </div>
          {this.props.children}
      </div>
    )
  }
}
