import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link to='/' className="navbar-brand mx-24">
          My Blog
        </Link>
        <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link to='/posts' className="nav-link active" aria-current="page">Posts</Link>
            </li>

            <li className="nav-item">
              <Link to='/about' className="nav-link active" aria-current="page">About</Link>
            </li>
            
          </ul>
        </div>
        </div>

      </nav>
    )
  }
}

export default Navbar
