import * as React from 'react'

const DefaultState = {
  propertyListings: [],
  filter: {}
}

const PropertyListingsContext = React.createContext(DefaultState)

export const PropertyListingsConsumer = PropertyListingsContext.Consumer

export class PropertyListingsProvider extends React.Component {
  state = DefaultState
  
  static applyFilter(listings, filter) {
    const { priceFrom, postcode, sortOrder } = filter
    let result = listings
    
    if (priceFrom) {
      const from = priceFrom
      result = result.filter(item => item.price >= from)
    }
    if (postcode) {
      result = result.filter(item => item.postcode.toLowerCase().startsWith(postcode))
    }
    if (sortOrder) {
      if (sortOrder === 'highestfirst') {
        result = result.sort((a, b) => b.price - a.price)
      }
      if (sortOrder === 'lowestfirst') {
        result = result.sort((a, b) => a.price - b.price)
      }
    }
    return result

  }
  componentDidMount() {
    fetch('../server/listings.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ propertyListings: res })
      })
  }
  updateFilter = filter => {
    this.setState({
      filter
    })
  }
  getListingByPropertyId = propertyId => {
    console.log('THis is getListingByPropertyId ')
    const { propertyListings } = this.state
    return propertyListings.find(listing => listing.id === Number(propertyId))
  }
  

  render() {
    const { children } = this.props
    const { propertyListings, filter } = this.state
    const filteredListings = PropertyListingsProvider.applyFilter(
      propertyListings,
      filter
    )
    return (
      <PropertyListingsContext.Provider
        value={{
          allListings: propertyListings,
          propertyListings:filteredListings,
          updateFilter: this.updateFilter,
          getListingByPropertyId: this.getListingByPropertyId
          
        }}
      >
        {children}
      </PropertyListingsContext.Provider>
      
    )
  }
}