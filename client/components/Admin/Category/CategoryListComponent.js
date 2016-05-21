import React from 'react';
import CategoryUnit from './CategoryUnit/CategoryUnit.jsx';

export default React.createClass({
  componentWillReceiveProps(){
    if(process.env.NODE_ENV == "development")
      console.log(this.props);
  },
  handleEdit(){

  },
  handleDelete(id){
    if(process.env.NODE_ENV == "development")
      console.log('delete');

    this.props.onDelete(id);
  },
  render(){
    let categories = this.props.categories;
    return(
      <div className="ui  middle aligned list">
        {categories.edges.map(edge =>
          <CategoryUnit  viewer={this.props.viewer} key={edge.node.id} category={edge.node} />
          )}
      </div>
    )
  }
})
