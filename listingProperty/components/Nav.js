import React from 'react'
import Link from 'next/link'
import Logo from './logo.png'

const Nav = () => (
 <nav>
  <header className="navbar">
  <section className="navbar-section logo">
    <a href="/" className="navbar-brand mr-2"><img src={Logo} alt= 'website logo' 
    style = {{width:'160px', height:'50px', paddingTop:'5px'}} /> </a>
  </section>
  <section className="navbar-center">
    <a href="#" className="btn btn-link">Buy</a>
    <a href="#" className="btn btn-link">Rent</a>
    <a href="#" className="btn btn-link">Find Agent</a>
    <a href="/about" className="btn btn-link">About</a>
  </section>
  <section  className="navbar-section">
  <button className="btn btn-link">LOGIN</button>
  <button className="btn btn-link">SIGN UP</button>
  </section>
  
  

</header>
<style jsx>
  {`
    a {
      text-align: center;
      
      font-size:25px;
      padding-left:30px;
      padding-bottom:0px;
    }
    
    .navbar-brand mr-2 {
    
    }
    button {
      font-size:20px
    }
    .navbar{
      border:1px solid blue;
      padding:0px 1px;
    }
    a.active{
      border-bottom:1px solid red;
    }
  `}
  </style>
</nav>  
 
  

)

export default Nav
