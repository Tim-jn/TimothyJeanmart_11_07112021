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
    data.map((item) => {
      if (id.match(item.id)) {
        return {
          id: item.id,
          title: item.title,
          cover: item.cover,
          pictures: item.pictures,
          location: item.location,
          host: { name: item.name, picture: item.picture },
          rating: item.rating,
          tags: item.tags,
          description: item.description,
          equipment: item.equipments,
        }
      } else {
        return {
          id: '',
          title: '',
          cover: '',
          pictures: [],
          description: '',
          host: { name: '', picture: '' },
          rating: '',
          location: '',
          equipments: [],
          tags: [],
        }
      }
    })
    /*return {
      description: 'xyz',
      title: 'xyz',
      pictures: [],
      location: '',
      host: { name: 'xyz', picture: 'xyz' },
      tags: [],
    }*/
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
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
//<Carousel datas={data} />
