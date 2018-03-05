import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Chat from './../Chat';

import shoppingIcon from './../../../../assets/ff366b55bdb384da591c25aa8ea0c45e.png';
import nightLifeIcon from './../../../../assets/dbe80fc7e4ce1bb020ebc72003d1776c.png';
import foodIcon from './../../../../assets/b0e45f17de077c935a27d87ab266a2cd.png';

import './tabPannel.scss';

class TabPannel extends Component {
  constructor () {
    super();
    this.state = {
      key: 1
    };
  };

  render () {
    return (
      <Tabs
        defaultActiveKey={1}
        onSelect={this.handleSelect}
        id='botscrew-tabs'
      >
        <Tab eventKey={1} title={this.getShoppingTab()}>
          <Chat {...this.props} />
        </Tab>
        <Tab eventKey={2} title={this.getNightLifeTab()}>
          <p className='message'>Tab 2 content</p>
        </Tab>
        <Tab eventKey={3} title={this.getFoodTab()}>
          <p className='message'>Tab 3 content</p>
        </Tab>
      </Tabs>
    );
  };

  handleSelect = (key) => {
    this.setState({ key });
  };

  getShoppingTab = () => {
    return <div className='tab-wrapper'>
      <div className='circle'>
        <img src={shoppingIcon} alt='shopping' />
      </div>
      <span className='tab-text'>Shopping</span>
    </div>;
  }
  getNightLifeTab = () => {
    return <div className='tab-wrapper'>
      <div className='circle'>
        <img src={nightLifeIcon} alt='night life' />
      </div>
      <span className='tab-text'>Night life</span>
    </div>;
  }
  getFoodTab = () => {
    return <div className='tab-wrapper'>
      <div className='circle'>
        <img src={foodIcon} alt='food' />
      </div>
      <span className='tab-text'>Food</span>
    </div>;
  }
};

export default TabPannel;
