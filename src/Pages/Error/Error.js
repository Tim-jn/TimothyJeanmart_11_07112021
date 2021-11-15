import { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import './error.css'

export default class Error extends Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <section>
          <div className="errorContent">
            <div className="errorNumber">404</div>
            <p className="errorText">
              Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className="backButton" to="/">
              Retourner sur la page d'accueil
            </Link>
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}
