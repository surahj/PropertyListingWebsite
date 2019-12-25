import * as React from 'react'
import css from "../styles.module.css";
import classnames from 'classnames'


function Hero({ miniHero }) {
  const classes = classnames(css.hero, 'hero', 'mb-3', {
    'hero-sm': miniHero,
    [css.miniHero]: miniHero,
    'hero-lg': !miniHero
  })
  
  return (
  
    <div  className={classes} >
      <div className="hero-body text-center text-light">
        <h1>DISCOVER A PLACE YOU WILL LOVE TO LIVE</h1>
        <p className='parag'>We'll help you find a place you will love</p>
      </div>
      <style jsx>
         {`
         .parag{
           font-size:30px;
           
         }
         `}
      </style>
    </div>
  )
}

export default Hero