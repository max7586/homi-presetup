import React, { Component } from 'react'

const PropertyListContext = React.createContext({
  propertyList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPropertyList: () => {},
})
export default PropertyListContext

export class PropertyListProvider extends Component {
  state = {
    propertyList: [],
    error: null,
  };

  setPropertyList = propertyList => {
    this.setState({ propertyList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      propertyList: this.state.propertyList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPropertyList: this.setPropertyList,
    }
    return (
      <PropertyListContext.Provider value={value}>
        {this.props.children}
      </PropertyListContext.Provider>
    )
  }
}
