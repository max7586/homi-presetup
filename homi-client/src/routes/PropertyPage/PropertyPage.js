import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropertyContext from '../../contexts/PropertyContext'
import PropertyApiService from '../../services/property-api-service'
import { Hyph, Section } from '../../components/Utils/Utils'
import { PropertyStarRating } from '../../components/PropertyStarRating/PropertyStarRating'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './PropertyPage.css'

export default class PropertyPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = PropertyContext

  componentDidMount() {
    const { propertyId } = this.props.match.params
    this.context.clearError()
    PropertyApiService.getProperty(propertyId)
      .then(this.context.setProperty)
      .catch(this.context.setError)
    PropertyApiService.getPropertyReviews(propertyId)
      .then(this.context.setReviews)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearProperty()
  }

  renderProperty() {
    const { property, reviews } = this.context
    return <>
      <div className='PropertyPage__image' style={{backgroundImage: `url(${property.image})`}} />
      <h2>{property.title}</h2>
      <PropertyContent property={property} />
      <PropertyReviews reviews={reviews} />
      <ReviewForm />
    </>
  }

  render() {
    const { error, property } = this.context
    let content
    if (error) {
      content = (error.error === `Property doesn't exist`)
        ? <p className='red'>Property not found</p>
        : <p className='red'>There was an error</p>
    } else if (!property.id) {
      content = <div className='loading' />
    } else {
      content = this.renderProperty()
    }
    return (
      <Section className='PropertyPage'>
        {content}
      </Section>
    )
  }
}

function PropertyContent({ property }) {
  return (
    <p className='PropertyPage__content'>
      {property.content}
    </p>
  )
}

function PropertyReviews({ reviews = [] }) {
  return (
    <ul className='PropertyPage__review-list'>
      {reviews.map(review =>
        <li key={review.id} className='PropertyPage__review'>
          <p className='PropertyPage__review-text'>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='PropertyPage__review-icon blue'
            />
            {review.text}
          </p>
          <p className='PropertyPage__review-user'>
            <PropertyStarRating rating={review.rating} />
            <Hyph />
            {review.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}
