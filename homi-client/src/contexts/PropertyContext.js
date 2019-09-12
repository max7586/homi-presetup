import React, { Component } from 'react'

export const nullProperty = {
  author: {},
  tags: [],
}

const PropertyContext = React.createContext({
  property: nullProperty,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setProperty: () => {},
  clearProperty: () => {},
  setReviews: () => {},
  addReview: () => {},
})

export default PropertyContext

export class PropertyProvider extends Component {
  state = {
    property: nullProperty,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setProperty = property => {
    this.setState({ property })
  }

  setReviews = reviews => {
    this.setState({ reviews })
  }

  clearProperty = () => {
    this.setProperty(nullProperty)
    this.setReviews([])
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  render() {
    const value = {
      property: this.state.property,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setProperty: this.setProperty,
      setReviews: this.setReviews,
      clearProperty: this.clearProperty,
      addReview: this.addReview,
    }
    return (
      <PropertyContext.Provider value={value}>
        {this.props.children}
      </PropertyContext.Provider>
    )
  }
}
