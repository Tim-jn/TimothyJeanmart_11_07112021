import { Component } from 'react'

export default class Accomodation extends Component {
  render() {
    return (
      <>
        {this.props.data.map((item) => {
          return (
            <section className="accomodationContent" key={item.id}>
              <h3>{item.title}</h3>
            </section>
          )
        })}
      </>
    )
  }
}
