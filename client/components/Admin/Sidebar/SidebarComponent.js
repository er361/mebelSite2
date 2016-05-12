import React, {Component} from 'react';
import Link from 'react-router/lib/Link';

export default React.createClass({
  render(){
    return(
      <div className="ui visible left vertical inverted sidebar menu">
        <Link className='item' to='mebel'>Mebel</Link>
        <Link className='item' to='category'>Category</Link>
      </div>
    )
  }
})
