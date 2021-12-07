import { Component } from 'react'
import previousBtn from './previous-btn.svg'
import nextBtn from './next-btn.svg'
import './carousel.css'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0,
    }
  }

  prevSlide = () => {
    const lastIndex = this.props.accomodation?.pictures.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

    this.setState({
      currentImageIndex: index,
    })
  }

  nextSlide = () => {
    const lastIndex = this.props.accomodation?.pictures.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    this.setState({
      currentImageIndex: index,
    })
  }

  displayButtons = () => {
    if (this.props.accomodation?.pictures.length > 1) {
      return (
        <>
          <img
            className="previousBtn"
            src={previousBtn}
            alt="Previous button"
            onClick={this.prevSlide}
          />
          <img
            className="nextBtn"
            src={nextBtn}
            alt="Next button"
            onClick={this.nextSlide}
          />
        </>
      )
    }
  }

  render() {
    return (
      <section className="carousel">
        <div className="accomodationRooms">
          <img
            src={
              this.props.accomodation?.pictures[this.state.currentImageIndex]
            }
            alt={this.props.accomodation?.title}
          />
        </div>
        {this.displayButtons()}
      </section>
    )
  }
}
