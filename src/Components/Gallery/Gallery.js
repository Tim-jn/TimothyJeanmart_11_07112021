import { Component } from 'react'
import { Link } from 'react-router-dom'
import './gallery.css'

export default class Gallery extends Component {
  render() {
    return (
      <section className="gallery">
        {this.props.galleryData.map((item) => {
          return (
            <div className="galleryItem" key={item.id}>
              <Link to={`/accomodation`}>
                <img
                  className="galleryItemImage"
                  src={item.cover}
                  alt={item.title}
                />
                <div className="blackGradient" />
                <h3 className="galleryItemText">{item.title}</h3>
              </Link>
            </div>
          )
        })}
      </section>
    )
  }
}
