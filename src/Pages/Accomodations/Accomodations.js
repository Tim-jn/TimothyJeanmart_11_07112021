import { Component } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Accomodation from '../../Components/Accomodation/Accomodation'
import data from '../../Data/Data'

export default class Accomodations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      className: 'accomodation',
      firstItem: {
        title: 'Description',
      },
      secondItem: {
        title: 'Équipements',
      },
    }
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <section>
          <Accomodation />
        </section>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}
