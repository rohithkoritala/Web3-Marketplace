import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://www.linkedin.com/in/rohithkoritala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rohith's Blockchain Marketplace
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block" >
            <small className="text-white" ><span id="account" onmousedown='return false;' onselectstart='return false;'>{this.props.account}</span></small>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;