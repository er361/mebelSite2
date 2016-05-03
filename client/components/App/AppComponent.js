import React from 'react';


import './App.scss';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object.isRequired
  };
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
                <h3 className="ui header">Application Content</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, atque!
                </p>
                <p>Iste fugiat architecto fugit quos natus, culpa est labore hic!
                </p>
                <p>Eos qui labore quo minima. Cum aspernatur nostrum quaerat saepe!
                </p>
                <p>Sed id, vel deleniti ab fugiat soluta illo, sequi rerum.
                </p>
                <p>Beatae delectus a aspernatur deserunt ad, tempora ut praesentium culpa.
                </p>
                <p>Sapiente dicta veritatis quas aspernatur sequi veniam eos, iste voluptatibus.
                </p>
                <p>Eaque blanditiis dolores, illum adipisci itaque velit culpa ullam impedit.
                </p>
                <p>Minus a ducimus nemo harum quam minima veritatis labore laborum.
                </p>
                <p>Eligendi suscipit enim voluptate aut vitae, consequatur, architecto quo unde.
                </p>
                <p>Quas non voluptatibus, molestiae qui ex dolores similique, quod odit.
                </p>
              </div>
            </div>
        </div>
      </div>

    );
  }
}
