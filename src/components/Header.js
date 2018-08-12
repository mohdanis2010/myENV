import React, { Component } from 'react';

export default class Header extends Component {
constructor(props) {
    super(props);
    this.state = {
      cityName: "Current Location"
    }
  }
  componentDidMount() {
    let thisSelf = this;

  }
  render() {
    return (
      <header className="main-header">
        <nav className="navbar navbar-static-top" role="navigation">
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="myenv-location">
            <div>myENV</div>
            <div className="myenv-locationname">
              <span className="myenv-selectlocation">{this.state.cityName}</span>
              <span className="glyphicon glyphicon-chevron-down down-top" aria-hidden="true"></span>
            </div>
          </div>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown notifications-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o"></i>
                  <span className="label label-warning">10</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>);
  }
}
