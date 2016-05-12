import React from 'react';


import './App.scss';

export default class App extends React.Component {
  // static propTypes = {
  //   children: React.PropTypes.object.isRequired,
  //   viewer: React.PropTypes.object.isRequired
  // };
  componentDidMount(){
    $(window).resize(()=>{
      if($(window).width() <= 768)
        $('.ui.sidebar')
          .sidebar('hide');
    });
    $('.ui.sidebar')
      .sidebar({
        context: $('.bottom.segment'),
        dimPage: true
      }).sidebar('attach events','.menu .item');
  }
  render() {
    return (
        <div>
          <div className="ui top attached  menu">
            <a className="item">
              <i className="sidebar icon"></i> Menu
            </a>
          </div>
          <div className="ui bottom attached segment pushable">
            <div className="ui visible inverted left vertical sidebar menu">
              <a className="item">
                <i className="home icon"></i> Home
              </a>
              <a className="item">
                <i className="block layout icon"></i> Topics
              </a>
              <a className="item">
                <i className="smile icon"></i> Friends
              </a>
              <a className="item">
                <i className="calendar icon"></i> History
              </a>
            </div>
            <div className="pusher">
              <div className="ui basic segment">
              </div>
            </div>
        </div>
      </div>

    );
  }
}
