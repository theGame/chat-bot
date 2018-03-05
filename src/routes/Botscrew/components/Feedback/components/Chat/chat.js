import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './chat.scss';

class Chat extends Component {
  constructor () {
    super();
    this.state = {
      textMessage: ''
    };
  };
  componentWillUpdate() {
    this.scrollDownChat();
  }
  componentDidUpdate() {
    this.scrollDownChat();
  };

  render () {
    return <section className='chat-wrapper'>
      <div ref='dialog' className='dialog-wrapper'>
        {this.props.messages.length
          ? this.showMessagesList()
          : this.showEmptyMessage()
        }
      </div>
      { this.isSomeoneTyping() }
      <div className='your-message-box'>
        <FormControl
          inputRef={ref => {this.textBox = ref}}
          value={this.state.textMessage.replace(/^\s*(\n)\s*$/, '')}
          onChange={this._handleInputChange}
          onKeyPress={this._handleEnterPressKey}
          componentClass='textarea'
          placeholder='Type a message...' />
      </div>
    </section>;
  };

  showMessagesList = () => {
    return this.props.messages.map(message => {
      return <div key={message.timestamp} className={(message.who === 'User' ? 'left' : 'right') + ' message-wrapper' }>
        <span className='who-text' title={message.who}>
          <span>{this.getShortName(message.who)}</span>
        </span>
        <span className='phrase'>{message.message}</span>
      </div>
    });
  };

  getShortName = (who = 'Bot') => {
    return who.charAt(0).toUpperCase();
  }

  isSomeoneTyping = (who = 'Bot') => {
    return <div className={(this.props.isLoading ? 'visible' : 'hidden') + ' is-someone-type'}>
      <div className='bubbles-wrapper'>
        <div className='b-1' />
        <div className='b-2' />
        <div className='b-3' />
      </div>
      <div className='who-is-typing' title={who}>
        <span>{this.getShortName(who)}</span>
      </div>
    </div>;
  }

  showEmptyMessage = () => {
    return <p className='message'>No Conversation yet!</p>
  };

  scrollDownChat = () => {
    const { dialog } = this.refs;
    dialog.scrollTop = dialog.scrollHeight;
  };

  _handleEnterPressKey = (e) => {
    const text = this.state.textMessage.trim();
    console.log(text);
    if (e.key === 'Enter' && text) {
      this.props.ask(text);
      this.setState(() => ({
        textMessage: ''
      }));
    }
  };

  _handleInputChange = () => {
    const textMessage = this.textBox.value;
    this.setState(() => ({
      textMessage
    }));
  }
};

Chat.propTypes = {
  ask: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Chat;
