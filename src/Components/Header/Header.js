import logo from './logo.svg'
import './header.css'
import { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Header extends Component {
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
            <NavLink className="navLink" to="/" exact>
              <li>Accueil</li>
            </NavLink>
            <NavLink className="navLink" to="/about" exact>
              <li>A propos</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    )
  }
}
