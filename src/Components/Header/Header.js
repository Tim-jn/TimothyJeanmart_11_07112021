import logo from './logo-small.png'
import './header.css'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + logo}
            alt="Homepage Kasa"
          />
        </Link>
        <nav className="nav">
          <ul>
            <Link className="navLink" to="/">
              <li>ACCUEIL</li>
            </Link>
            <Link className="navLink" to="/about">
              <li>A PROPOS</li>
            </Link>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
