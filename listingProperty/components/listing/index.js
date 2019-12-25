import * as React from 'react'
import Link from 'next/link'
import classnames from 'classnames'


import styles from '../styles.module.css'

export function PriceFormat ({price}){
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2
  })
  return formatter.format(price)
}
function Listing({ listing }) {
  if (!listing) {
    return null
  }

  const { id, images, title, address, description, price } = listing
  const columnClasses = classnames('column', 'col-4', 'col-xs-12', styles.column)
  const cardClasses = classnames('card', styles.card)
  const image = images.find(index=> { return (index)})
  
  return (
    <div className={columnClasses}>
      <div className={cardClasses}>
        <div className="card-image">
          <img className="img-responsive" src={`/server/${image}`} alt={address} />
        </div>
        <div className="card-header">
          <div className="card-title h5">{title}</div>
          <div className="card-title h6">
         
            {<PriceFormat price={price}/>}
          </div>
          <div className="card-subtitle text-gray">{address}</div>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-footer">
          <Link href={`details/${id}`}>
           <a className= "btn btn-primary"> Go to property</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Listing