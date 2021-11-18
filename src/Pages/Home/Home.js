import Banner from '../../Components/Banner/Banner'
import Header from '../../Components/Header/Header'
import Gallery from '../../Components/Gallery/Gallery'
import Footer from '../../Components/Footer/Footer'
import data from '../../Data/Data'
import bannerUrl from './banner.jpg'
import { Component } from 'react'
import './home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerUrl: bannerUrl,
      text: 'Chez vous, partout et ailleurs',
      className: 'home',
    }
  }

  render() {
    return (
      <>
        <header>
          <Header />
          <Banner
            url={this.state.bannerUrl}
            text={this.state.text}
            className={this.state.className}
          />
        </header>
        <main>
          <Gallery galleryData={data} />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}
