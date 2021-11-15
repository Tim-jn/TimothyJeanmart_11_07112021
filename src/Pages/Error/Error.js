import { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import './error.css'

class Error extends Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <div className="errorContent">
          <div className="errorNumber">404</div>
          <p className="errorText">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link className="backButton" to="/">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </>
    )
  }
}

export default Error
