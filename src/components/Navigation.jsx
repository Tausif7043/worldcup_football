import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Container from './Container'

const NavItem = props => {
  const pathURI = window.location.pathname;
  const liClassName = (props.path === pathURI) ? 'nav-item active' : 'nav-item'
  return (
    <li className={liClassName}>
      <a className="nav-link" href={props.path}>{props.name} </a>
    </li>
  )
}

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <NavItem path='/' name='Home' />
            <NavItem path='/teams' name='Teams' />
            <NavItem path='/fixtures' name='Fixtures' />
            <NavItem path='/groups' name='Groups' />
            <NavItem path='/players' name='Players' /> */} 
              <Route exact path='/' component={Container} /> 
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;

