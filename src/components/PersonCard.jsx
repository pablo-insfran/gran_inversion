import React, { Component } from 'react'

class PersonCard extends Component {

  render() {
    const { fristName, lastName, age, hairColor } = this.props
    return (
      <div>
        <h1>{fristName}, {lastName} </h1>
        <h3>Age: {age}</h3>
        <h3>Hair Color: {hairColor}</h3>
      </div>
    )
  }
}

export default PersonCard;