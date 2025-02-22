import React, { Component } from 'react'
import { connect } from 'react-redux'
import { peopleSelector, getPeople } from '../../ducks/people'

class PeopleList extends Component {
  static propTypes = {}

  componentDidMount() {
    this.props.getPeople()
  }

  render() {
    return (
      <div>
        {this.props.people.map((person) => (
          <li key={person.id}>
            {person.firstName}: {person.email}
          </li>
        ))}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    people: peopleSelector(state)
  }),
  { getPeople }
)(PeopleList)
