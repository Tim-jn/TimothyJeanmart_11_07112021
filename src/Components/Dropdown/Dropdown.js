import { Component } from 'react'
import openButton from './openButton.svg'
import closedButton from './dropdownbtn.svg'

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
      text: this.props.text,
      className: this.props.className,
    }
  }

  setToggle = () => {
    this.state.openToggle
      ? this.setState({ openToggle: false })
      : this.setState({ openToggle: true })
  }

  render() {
    return (
      <div className={`${this.state.className}Dropdown`}>
        <div
          className={`${this.state.className}DropdownVisible`}
          onClick={this.setToggle}
        >
          <h3>{this.state.text.title}</h3>
          {this.state.openToggle ? (
            <img
              className="toggleButton"
              src={openButton}
              alt="Toggle button"
            />
          ) : (
            <img
              className="toggleButton"
              src={closedButton}
              alt="Toggle button"
            />
          )}
        </div>
        <div
          className={
            this.state.openToggle
              ? `${this.state.className}ToggleOpen`
              : `${this.state.className}ToggleClose`
          }
        >
          <div>{this.state.text.content}</div>
        </div>
      </div>
    )
  }
}
