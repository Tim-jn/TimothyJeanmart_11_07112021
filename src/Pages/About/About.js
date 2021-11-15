import { Component } from 'react'
import Header from '../../Components/Header/Header'
import Dropdown from '../../Components/Dropdown/Dropdown'
import Footer from '../../Components/Footer/Footer'
import './about.css'
import Banner from '../../Components/Banner/Banner'
import bannerUrl from './aboutBackground.jpg'

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      className: 'about',
      firstItem: {
        title: 'Fiabilité',
        content:
          'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
      },
      secondItem: {
        title: 'Respect',
        content:
          'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
      },
      thirdItem: {
        title: 'Service',
        content:
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      },
      fourthItem: {
        title: 'Sécurité',
        content:
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      },
    }
  }

  render() {
    return (
      <>
        <header>
          <Header />
          <Banner url={bannerUrl} className={this.state.className} />
        </header>
        <section>
          <Dropdown
            text={this.state.firstItem}
            className={this.state.className}
          />
          <Dropdown
            text={this.state.secondItem}
            className={this.state.className}
          />
          <Dropdown
            text={this.state.thirdItem}
            className={this.state.className}
          />
          <Dropdown
            text={this.state.fourthItem}
            className={this.state.className}
          />
        </section>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}
