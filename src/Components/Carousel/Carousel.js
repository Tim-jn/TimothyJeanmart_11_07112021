import { Component } from 'react'
import previousBtn from './previous-btn.svg'
import nextBtn from './next-btn.svg'
import './carousel.css'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }

  prevSlide = () => {
    this.setState({ current: -1 })
  }

  nextSlide = () => {
    this.setState({ current: +1 })
  }

  render() {
    return (
      <section className="carousel">
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
        {this.props.datas.map((slide, index) => {
          return <img src={slide.pictures} alt={slide.title} />
        })}
      </section>
    )
  }
}
