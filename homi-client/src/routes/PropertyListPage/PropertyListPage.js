import React, { Component } from 'react'
import PropertyListContext from '../../contexts/PropertyListContext'
import PropertyApiService from '../../services/property-api-service'
import { Section } from '../../components/Utils/Utils'
import PropertyListItem from '../../components/PropertyListItem/PropertyListItem'
import './PropertyListPage.css'

export default class PropertyListPage extends Component {
  static contextType = PropertyListContext

  componentDidMount() {
    this.context.clearError()
    PropertyApiService.getProperties()
      .then(this.context.setPropertyList)
      .catch(this.context.setError)
  }

  renderProperties() {
    const { propertyList = [] } = this.context
    return propertyList.map(property =>
      <PropertyListItem
        key={property.id}
        property={property}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='PropertyListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderProperties()}
      </Section>
    )
  }
}
