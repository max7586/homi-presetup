import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import ListMyPropertyForm from '../../components/ListMyPropertiesForm/ListMyPropertiesForm'

export default class ListMyPropertyPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/properties')
  }

  render() {
    return (
      <Section className='ListMyPropertyPage'>
        <h2>Add Property </h2>
        <p>Selling or renting your property is NOT complicated anymore</p>
        <ListMyPropertyForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}
