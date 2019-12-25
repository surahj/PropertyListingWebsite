import * as React from 'react'
import { useRouter } from 'next/router';

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'

import PropertyDetails from '../../components/propertyDetails'
import Layout from '../../components/Layout'
import Link from 'next/link';



function Details({ propertyId }) {
  const router = useRouter();
  const id = router.query.id
  
  return (
   
      <Layout>
      <div className="container">
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
         
            {({ getListingByPropertyId }) => (
              <PropertyDetails listing={getListingByPropertyId(id)} />
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
      </Layout>
  )
}

export default Details