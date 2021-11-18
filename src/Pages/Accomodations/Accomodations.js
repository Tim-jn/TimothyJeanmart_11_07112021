import { Component } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Accomodation from '../../Components/Accomodation/Accomodation'
import data from '../../Data/Data'
import Carousel from '../../Components/Carousel/Carousel'

export default class Accomodations extends Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Accomodation datas={data} />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}

//<Carousel datas={data} />
