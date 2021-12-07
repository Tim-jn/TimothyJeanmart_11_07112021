import { Component } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Rating from '../Rating/Rating'
import './accomodation.css'

export default class Accomodation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      className: 'accomodation',
    }
  }

  render() {
    this.firstItem = {
      title: 'Description',
      content: this.props.accomodation?.description,
    }

    this.secondItem = {
      title: 'Équipements',
      content: this.props.accomodation?.equipments.map((equipments, index) => {
        return <li key={index}>{equipments}</li>
      }),
    }

    return (
      <>
        {this.props.accomodation && (
          <section className="accomodationContent">
            <div className="accomodationTitle">
              <h3>{this.props.accomodation.title}</h3>
              <p>{this.props.accomodation.location}</p>
              <ul className="accomodationTags">
                {this.props.accomodation.tags.map((tags, index) => {
                  return <li key={'tag ' + index}>{tags}</li>
                })}
              </ul>
              <div className="hostInformations">
                <Rating data={this.props.accomodation.rating} />
                <div className="hostProfile">
                  <h4>{this.props.accomodation.host.name}</h4>
                  <img src={this.props.accomodation.host.picture} alt="Host" />
                </div>
              </div>
            </div>
            <div className="accomodationDropdowns">
              <Dropdown
                text={this.firstItem}
                className={this.state.className}
              />
              <Dropdown
                text={this.secondItem}
                className={this.state.className}
              />
            </div>
          </section>
        )}
      </>
    )
  }
}
