import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Router>
            <ul className="navbar-nav mr-auto"> 
              <li className='nav-item'><NavLink to='/' className="nav-link">Home</NavLink></li>
              <li className='nav-item'><NavLink to='/teams' className="nav-link">Teams</NavLink></li>
              <li className='nav-item'><NavLink to='/fixtures' className="nav-link">Fixtures</NavLink></li>
              <li className='nav-item'><NavLink to='/groups' className="nav-link">Groups</NavLink></li>
              <li className='nav-item'><NavLink to='/players' className="nav-link">Players</NavLink></li>
            </ul>
          </Router>
        </div>
      </nav>
    );
  }
}

export default Navigation;

