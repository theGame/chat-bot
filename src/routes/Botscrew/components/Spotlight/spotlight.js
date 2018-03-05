import React from 'react';

import nightLifeThumb from './../../assets/6206fad29ab84fffbf0aae15fad8107e.jpg';
import foodThumb from './../../assets/7f59a804e05f1017370ff6e519750458.jpg';
import shoppingThumb from './../../assets/b1def1aec3df790b623c27f8062efb25.jpg';

import { Thumbnail }from 'react-bootstrap';
import './spotlight.scss';

export const Spotlight = () => (
  <section className='botscrew-spotlight-wrapper'>
    <div className='container'>
      <header className='spotlight-header'>
        <h2>Powered by artificial intelligence</h2>
        <h3>Designed by travelers</h3>
      </header>
      <div className='row'>
        <div className='col-sm-4 col-md-4'>
          <Thumbnail src={nightLifeThumb} alt='night life' >
            <h3>Night life</h3>
            <p>Looking for night clubs and lounge zones? Explore available places and events</p>
          </Thumbnail>
        </div>

        <div className='col-sm-4 col-md-4'>
          <Thumbnail src={foodThumb} alt='food' >
            <h3>Food</h3>
            <p>Looking work an unique cafe? Explore top-rated spaces.</p>
          </Thumbnail>
        </div>

        <div className='col-sm-4 col-md-4'>
          <Thumbnail src={shoppingThumb} alt='shopping' >
            <h3>Shopping</h3>
            <p>Going to buy new laptop? Explore available stores around you</p>
          </Thumbnail>
        </div>
      </div>
    </div>
  </section>
);

export default Spotlight;
