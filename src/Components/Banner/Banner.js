import { Component } from 'react'

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: this.props.url,
      text: this.props.text,
      className: this.props.className,
    }
  }

  render() {
    return (
      <div className={`${this.props.className}Banner`}>
        <img
          className={`${this.props.className}BannerImage`}
          src={this.state.url}
          alt="Banner"
        />
        <h2 className="bannerText">{this.props.text}</h2>
      </div>
    )
  }
}
