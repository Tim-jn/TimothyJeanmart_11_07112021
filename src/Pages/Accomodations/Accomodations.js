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

    this.state = {
      accomodation: null,
    }
  }

  getAccomodation(id) {
    const accomodation = data.find((item) => id === item.id)
    if (!accomodation) {
      this.props.history.push('/error404')
      return null
    }
    return accomodation
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search)
    this.setState({
      accomodation: this.getAccomodation(searchParams.get('id')),
    })
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Carousel accomodation={this.state.accomodation} />
          <Accomodation accomodation={this.state.accomodation} />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}

export default withRouter(Accomodations)
