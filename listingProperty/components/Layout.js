import React from 'react'
import Nav from './Nav'
import Head from 'next/head'
import Link from 'next/link'
import './global.css'
import './helpers.scss'


const Layout = (props)=> (
    <div>
    <Head>
      <title>FoMap</title>
      <link rel="icon" href="/favicon.ico" />
      {/* <link rel="stylesheet" href="../static/spectre.css"/> */}
      
      {/* <link rel="stylesheet" href="../node_modules/spectre.css/dist/spectre.css" /> */}    
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css"></link> 
      
    </Head>
        <Nav />
        <div className='container'>
        {props.children}
        </div>
        
    </div>
)

export default Layout