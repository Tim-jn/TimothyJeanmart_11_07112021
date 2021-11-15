import { Component } from 'react'
import { Link } from 'react-router-dom'
import './gallery.css'

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        {this.props.galleryData.map((item) => {
          return (
            <div className="galleryItem" key={item.id}>
              <Link to={`/${item.id}`}>
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
      </div>
    )
  }
}

export default Gallery
