import React from 'react';
import { Link } from 'react-router';
import './footer.scss';

export const Footer = () => (
  <footer>
    <div className='row'>
      <div className='col-sm-4 col-md-4 left-content'>
        <div className='attractie'>attractie</div>
        <div className='copyright'>© Copyright Attractie</div>
      </div>
      <div className='col-sm-8 col-md-8 right-content'>
        <div className='first-row-links'>
          <Link to='/' activeClassName='social-layout'>Social</Link>
          <Link to='/' activeClassName='facebook-layout'>Facebook</Link>
          <Link to='/' activeClassName='twitter-layout'>Twitter</Link>
          <Link to='/' activeClassName='linkedin-layout'>LinkedIn</Link>
          <Link to='/' activeClassName='angel-list-layout'>Angel List</Link>
        </div>
        <div className='second-row-links'>
          <Link to='/' activeClassName='navigation-layout'>Navigation</Link>
          <Link to='/' activeClassName='careers-layout'>Careers</Link>
          <Link to='/' activeClassName='our-services-layout'>Our services</Link>
          <Link to='/' activeClassName='about-us-layout'>About us</Link>
          <Link to='/' activeClassName='contact-layout'>Contact</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
