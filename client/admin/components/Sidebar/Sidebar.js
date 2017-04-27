import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router';

let renderLeaf = (link, i) => {
    return (
      <li className="nav-item" key={i}>
        <Link to={link.url} className="nav-link">
          <i className={link.icon}></i> {link.text}</Link>
      </li>
    );
}

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      links: []
    };
  }

  componentDidMount() {
    var _this = this;
    this.serverRequest =
      axios
        .get("/admin/menu")
        .then(function (result) {
          _this.setState({
            links: result.data
          });
        })
  }

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link">
                <i className="icon-speedometer"></i> Dashboard</Link>
            </li>
            {this.state.links.map((link, i) => {
              if(link.branch){
                return (
                  <li className={this.activeRoute(`${link.url}`)} key={i}>
                    <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className={link.icon}></i> {link.text}</a>
                    <ul className="nav-dropdown-items">
                      {link.children.map( (leaf,n) => {
                        return renderLeaf(leaf,n)
                      })}
                    </ul>
                  </li>
                )
              }else{
                return renderLeaf(link,i);
              }
            })}
          </ul>
        </nav>
      </div>
    )
  }
}

export default withRouter(Sidebar);
