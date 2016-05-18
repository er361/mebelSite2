import React from 'react';

export default React.createClass({
  render(){
    return(
      <div className="ui middle aligned divided list">
        <div className="item">
          <div className="right floated content">
            <div className="ui tiny blue basic button">Edit</div>
            <div className="ui tiny red basic button">Delete</div>
          </div>
          <div className="bottom aligned content">content</div>
        </div>
      </div>
    )
  }
})
