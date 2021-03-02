import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          My Blog
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link to='/posts' className="nav-link active" aria-current="page">Posts</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://durlavk98.github.io/portfolio/">About</a>
            </li>
            
          </ul>
        </div>
        </div>

      </nav>
    )
  }
}

export default Navbar
