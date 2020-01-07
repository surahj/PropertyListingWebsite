import React from 'react'
import Link from 'next/link'
import Logo from './logo.png'

const Nav = () => (
 <nav>
   {function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}}

  <header className="navbar" id ="myTopnav">
  <section className="navbar-section logo">
    <a href="/" className="navbar-brand mr-2"><img src={Logo} alt= 'website logo' 
    style = {{width:'160px', height:'50px', paddingTop:'5px'}} /> </a>
  </section>
  <section className="navbar-center">
  <a href="/about" className="btn btn-link">About</a>
  
    {/* <a href="#" className="btn btn-link">Buy</a>
    <a href="#" className="btn btn-link">Rent</a>
    <a href="#" className="btn btn-link">Find Agent</a>
    <a href="/" className="btn btn-link" >Home</a> */}
    <a href="dangerouslySetInnerHTML;" className="icon" onClick="myFunction()">
    <i ></i>
  </a>
  </section>
  {/* <section  className="navbar-section">
  <button className="btn btn-link">LOGIN</button>
  <button className="btn btn-link">SIGN UP</button>
  </section> */}
  
  

</header>
<style jsx>
  {`
    
    
    button {
      font-size:20px
    }
    .navbar{
      border:1pxpx solid gray;
      padding:0px 1px;
    }
    
    .navbar-center a:hover{
      border-top:1px solid red;
      border-bottom:1px solid red;
      color:red;
    }

    .navbar {
      overflow: hidden;
      
    }
    
    .navbar a {
      float: left;
      display: block;
      
      text-align: center;
      
      text-decoration: none;
      font-size: 17px;
    }
    
    .navbar a:hover {
      border-top:1px solid red;
      border-bottom:1px solid red;
      text-color:red;
    }
    
     .navbar a:active {
      border-bottom:1px solid red;
     }
    
    .navbar .icon {
      display: none;
    }
    
    @media screen and (max-width: 600px) {
      .navbar a:not(:first-child) {display: none;}
      .navbar a.icon {
        float: right;
        display: block;
      }
    }
    
    @media screen and (max-width: 600px) {
      .navbar.responsive {position: relative;}
      .navbar.responsive .icon {
        position: absolute;
        right: 0;
        top: 0;
      }
      .navbar.responsive a {
        float: left;
        display: block;
        text-align: center;
      }
    }
  `}
  </style>
</nav>  
 
  

)

export default Nav
