import { Component } from 'react'
import emptyStar from './star-regular.svg'
import fullStar from './star-solid.svg'
import './rating.css'

export default class Rating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
    }
  }

  render() {
    const rating = this.state.data
    let starsArray = []

    for (let i = 0; i < Number(rating); i++) {
      starsArray.push(<img src={fullStar} alt="rating star" key={i} />)
    }

    return (
      <div className="rating">
        <div className="stars-outer">
          <img src={emptyStar} alt="Empty star" />
          <img src={emptyStar} alt="Empty star" />
          <img src={emptyStar} alt="Empty star" />
          <img src={emptyStar} alt="Empty star" />
          <img src={emptyStar} alt="Empty star" />
          <div className="stars-inner">{starsArray}</div>
        </div>
      </div>
    )
  }
}
