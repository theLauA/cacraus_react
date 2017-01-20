import React from 'react';

export default class Navbar extends React.Component {
  render(){
    return(
      <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed pull-right" data-toggle="collapse"
                              data-target="#navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand" href="#">
             <img src="img/Logover1.png"/>
            </a>
          </div>

        <div className="collapse navbar-collapse" id="navbar-collapse-1">


          <ul className="nav nav-tabs">
            <li role="presentation">
              <a href="#">主頁 :: Home</a>
            </li>
            <li role="presentation" className="active">
              <a type="button" className="dropdown-toggle"
                 data-toggle="dropdown">
                關於我們 :: About Us
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">使命 :: Mission</a></li>
                <li><a href="#">董事会 :: Board Member</a></li>
              </ul>
            </li>
            <li role="presentation">
              <a href="#">行使你的權力 :: Exercise Your Right</a>
            </li>
            <li role="presentation">
              <a href="#">服務 :: Service</a>
            </li>
            <li role="presentation">
              <a href="#">社區故事 :: Community Story</a>
            </li>
            <li role="presentation">
              <a type="button" className="dropdown-toggle"
                 data-toggle="dropdown">
                資源 :: Resources
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">登记状态 :: Registration Status</a></li>
              </ul>
            </li>
          </ul>
        </div>

        </div>
      </nav>
      </div>
    )
  }
}
