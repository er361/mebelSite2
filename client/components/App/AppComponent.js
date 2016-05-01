import React from 'react';
//import Navbar from '../Navbar/NavbarComponent';
//import Footer from '../Footer/FooterContainer';

import './App.scss';
import yeoman from '../../assets/yeoman.png';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div className='ui grid'>

      </div>
    );
  }
}
