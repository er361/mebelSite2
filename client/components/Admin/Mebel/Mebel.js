import React from 'react';
import Relay from 'react-relay';

import MebelCreateForm from './MebelCreateForm.jsx';

class Mebel extends React.Component {
  componentDidMount() {
    //console.log(this.props);
  }
  render(){
    const { props: { viewer: viewer, viewer: { categories: categories} } } = this
    return(
      <div className="ui grid">
        <div className="four wide column">
          <MebelCreateForm viewer={viewer}  categories={categories} />
        </div>
      </div>
    )
  }
}
export default  Relay.createContainer(Mebel, {
  prepareVariables(){
    return {
      limit : 100
    }
  },
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      ${MebelCreateForm.getFragment('viewer')}
      categories(first : $limit) {
        ${MebelCreateForm.getFragment('categories')}
      }
    }
     `
  }
})
