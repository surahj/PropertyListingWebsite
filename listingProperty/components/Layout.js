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

      <link rel="stylesheet" href="../static/spectre/dist/spectre.css"/>
      <link rel="stylesheet" href="../static/spectre/dist/spectre-exp.min.css"/>
      <link rel="stylesheet" href="../static/spectre/dist/spectre-icons.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      
      
       {/* <link rel="stylesheet" href="../node_modules/spectre.css/dist/spectre.css" />    */}
      {/* <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css"></link> 
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"></link> 
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"></link>  */}
      
    </Head>
        <Nav />
        <div className='container'>
        {props.children}
        </div>
        
    </div>
)

export default Layout