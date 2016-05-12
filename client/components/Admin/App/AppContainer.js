import Relay from 'react-relay';

//Component
import AppComponent from './AppComponent.js';

export default Relay.createContainer(AppComponent, {
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer {
      id
    }`
  }
})
