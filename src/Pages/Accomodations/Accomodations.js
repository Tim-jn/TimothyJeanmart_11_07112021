import { Component } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Accomodation from '../../Components/Accomodation/Accomodation'
import data from '../../Data/Data'
import { withRouter } from 'react-router'
import Carousel from '../../Components/Carousel/Carousel'

class Accomodations extends Component {
  constructor(props) {
    super(props)
    const searchParams = new URLSearchParams(this.props.location.search)
    this.state = {
      accomodationId: searchParams.get('id'),
    }
  }

  getAccomodation = (id) => {
    return data.find((item) => {
      if (id === item.id) {
        return id === item.id
      } else if (id !== item.id) {
        this.props.history.push('/error404')
        return (item.id = [])
      }
      return console.log('')
    })
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Carousel
            accomodation={this.getAccomodation(this.state.accomodationId)}
          />
          <Accomodation
            accomodation={this.getAccomodation(this.state.accomodationId)}
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}

export default withRouter(Accomodations)
