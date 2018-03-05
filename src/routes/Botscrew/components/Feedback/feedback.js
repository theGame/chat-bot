import React from 'react';
import TabPannel from './components/TabPannel';
import './feedback.scss';

const getStartedClickHandler = () => console.log('click handler:: get started button [feedback component]');

export const Feedback = (props) => (
  <section className='row feedback-wrapper'>
    <div className='col-sm-12 col-md-8 feedback-text-wrapper'>
      <header>
        <h2>Available for you anytime</h2>
        <h2>Everywhere</h2>
      </header>
      <div className='feedback-content'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt interdum sapien.</p>
        <p>
          Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti.
          Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.
        </p>
        <button onClick={getStartedClickHandler}>Get Started</button>
      </div>
    </div>
    <div className='col-sm-12 col-md-4 tab-pannel-wrapper'>
      <TabPannel {...props} />
    </div>
  </section>
);

export default Feedback;
