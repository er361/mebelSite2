import React from 'react';
import Relay from 'react-relay';

import AddMebelMutation from '../../../mutations/admin/mebel/AddMebelMutation.jsx';
import MebelCreateForm from './MebelCreateForm.jsx';
import MebelList from './MebelList.jsx';

class Mebel extends React.Component {
  componentDidMount() {
    //console.log(this.props);
  }
  handleSave = (data) => {
    //add viewer id
    data.viewer = this.props.viewer;

    Relay.Store.commitUpdate(new AddMebelMutation({
      ...data
    }))
  }
  render(){
    const { props: { viewer: viewer } } = this
    return(
      <div className="ui grid">
        <div className="four wide column">
          <MebelCreateForm onSave={this.handleSave}  categories={viewer.categories} />
        </div>
        <div className="four wide column">
          <MebelList  viewer={viewer}  mebels={viewer.mebels} />
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
      ${MebelList.getFragment('viewer')}
      mebels(first : $limit){
        ${MebelList.getFragment('mebels')}
      }
      categories(first : $limit) {
        ${MebelCreateForm.getFragment('categories')}
      }
      ${AddMebelMutation.getFragment('viewer')}
    }
     `
  }
})
