import React from 'react'
import Layout from '../components/Layout'
import Hero from './../components/Hero'
import css from "./../components/styles.module.css";
import Filter from './../components/filter'
import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../context/PropertyListingsProvider'
import fetch from 'isomorphic-unfetch'
import Listing from './../components/listing'
import Link from 'next/link'



const Home = (props) => (
  <Layout>
    <div>
      <Hero />
      
    </div>
    <div>
    
    </div>
    <div className="container">
      <PropertyListingsProvider>
        <PropertyListingsConsumer>
          {function (value) {
            const { propertyListings,allListings, updateFilter } = value
            return (
              <div>
              <Filter updateFilter={updateFilter}
              postcodes={allListings
                .map(listing => listing.postcode.split(' ')[0])
                .filter((item, i, arr) => arr.indexOf(item) === i)}
              />
              <div className="columns">
                {propertyListings.map(listing => (
                  <Listing listing={listing} key={listing.id}  />
                  
                ))}
              </div>
              
              </div>
            )
          }}
        </PropertyListingsConsumer>

      </PropertyListingsProvider>

    </div>
  </Layout>
)


export default Home
