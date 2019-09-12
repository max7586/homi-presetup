import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropertyStarRating } from '../PropertyStarRating/PropertyStarRating'
import './PropertyListItem.css'

export default class PropertyListItem extends Component {
  render() {
    const { property } = this.props

    return (
      <Link to={`/property/${property.id}`} className='PropertyListItem'>
        <div className='PropertyListItem__image' style={{backgroundImage: `url(${property.image})`}} />

        <div className='PropertyListItem__details'>
          <div className='PropertyListItem__text'>
            <h2 className='PropertyListItem__heading'>{property.title}</h2>
            <p className='PropertyListItem__description'>{truncate(property.content)}</p>
            <p className='PropertyListItem__userId'>{property.user_id}</p>
          </div>

          <div className='PropertyListItem__reviews'>
            <PropertyStarRating rating={property.average_review_rating} />
            <span id='PropertyListItem__review-count'>{readableReviewCount(property.number_of_reviews)}</span>
          </div>
        </div>
      </Link>
    )
  }
}

function readableReviewCount(number) {
  switch(number) {
    case 0:
      return 'no reviews yet'

    case 1:
      return `based on 1 review`

    default:
      return `based on ${number} reviews`
  }
}

function truncate(text) {
  const words = text.split(' ')

  if (words.length > 10) {
    return words.slice(0, 10).join(' ') + ' ...'
  }

  return text
}
