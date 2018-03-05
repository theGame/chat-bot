import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/index';
import Spotlight from './components/Spotlight/index';
import Footer from './components/Footer/index';
import Feedback from './components/Feedback/index';
import './botscrew.scss';

export const Botscrew = ({ isLoading, messages, ask }) => (
  <div className='botscrew-wrapper'>
    <Header />
    <Spotlight />
    <section className='footer-wrapper'>
      <div className='container'>
        <Feedback messages={messages} isLoading={isLoading} ask={ask} />
        <Footer />
      </div>
    </section>
  </div>
);

Botscrew.propTypes = {
  ask: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Botscrew;
