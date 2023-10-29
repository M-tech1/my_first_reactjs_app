import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>

<footer class="footer-distributed">

<div class="footer-left">

  <h3>Tribal<span>Tube</span></h3>

  <p class="footer-links">
    <a href="#" class="link-1">Home</a>
    
    <a href="#">Blog</a>
  
    <a href="#">About</a>
    
    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name">TribalTube © 2023</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>Area F, No. 50</span> Lugbe, Abuja</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+234-8065191675</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">support@Tribaltube.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About the company</span>
    Promoting social cultural values
  </p>

  <div class="footer-icons">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

  </div>

</div>

</footer>

</>

    
  )
}

export default Footer