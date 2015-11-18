import React from 'react';
import classNames from 'classnames';

import './index.scss';

export default React.createClass({
  displayName: 'MessageInput',

  propTypes: {
    submitHandler: React.PropTypes.func,
  },

  handleSubmit: function(event) {
    event.preventDefault();
    const { submitHandler } = this.props;
    const messageText = this.refs.messageTextInput.value;
    submitHandler(messageText);
    this.refs.messageTextInput.value = '';
  },

  render: function() {
    const cx = classNames({
      'messageInput': true
    });
    return (
      <div className={ cx }>
        <form name='messageInputForm' onSubmit={ this.handleSubmit }>
          <input type='text' ref='messageTextInput' name='messageInput' />
          <input type='submit' style={ { display: 'none' } } />
        </form>
      </div>
    );
  }
});
