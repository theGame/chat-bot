import React from 'react';
import './header.scss';

const facebookClickHandler = () => console.log('click handler:: facebook button');
const twitterClickHandler = () => console.log('click handler:: tritter button');
const getStartedClickHandler = () => console.log('click handler:: get started button [header component]');

export const Botscrew = () => (
  <header className='botscrew-header'>
    <div className='container'>
      <div className='header-top'>
        <p className='attractie'>attractie</p>
        <p className='social-icons'>
          <i className='fa fa-facebook-square' onClick={facebookClickHandler} />
          <i className='fa fa-twitter' onClick={twitterClickHandler} />
        </p>
      </div>
      <div className='jumbotron header-text'>
        <h1>Chatbot which helps millennials</h1>
        <p>Find unique attractions</p>
        <button onClick={getStartedClickHandler}>Get Started</button>
      </div>
    </div>
  </header>
);

export default Botscrew;
