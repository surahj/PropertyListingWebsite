import * as React from 'react'
import classnames from 'classnames'

import KeyFeatures from '../keyFeatures'
import Map from '../map'
import  '../styles.module.css'
import Gallery from '../gallery'
import { PriceFormat } from '../listing'
import KeyImage from '../KeyImage'

function PropertyDetails({ listing }) {
  if (!listing) {
    return null
  }
  
  console.log('This is propeertyDetails')
  const { title, address, description, price, features, details, images } = listing
  const priceClasses = classnames('text-success', 'text-right')
  const indexes = images.map((img,index)=>{return (index)})

  return (
    <div>
      <div className="columns">
        <div className="column col-9 col-xs-12">
          {<br />}{<br />}
          <h2>{title}</h2>
          <h3 className="text-dark text-small mb-1">{description}</h3>
        </div>
        <div className="column col-3 col-xs-12">
        {<br />}{<br />}
          <h3 className={priceClasses}>
            <small>Priced from</small>
            <br />
            
            {<PriceFormat price={price} />}
          </h3>
        </div>
      </div>
      <div className="columns">
        <div className="column col-6 col-xs-12">
         <KeyImage images={images} key={images.map((img,index)=>{return index})} />
        </div>

        <div className="column col-6 col-xs-12">
          <KeyFeatures features={features} />
        </div>
      </div>
      <p className="text-bold mt-3">Full Details</p>
      {details.map(detail => (
        <p key={detail}>{detail}</p>
      ))}
      <p className="text-bold mt-3">Map</p>
      <Map address={address} />
    </div>
  )
}

export default PropertyDetails