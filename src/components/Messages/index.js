import React from 'react';
import classNames from 'classnames';

// TODO: implement Message
//import Message from '../Message';

import './index.scss';

export default React.createClass({
  displayName: 'Messages',

  propTypes: {
    messages: React.PropTypes.object,
  },

  componentDidUpdate: function() {
    const { messageList } = this.refs;

    // Scroll the view to the bottom
    messageList.scrollTop = messageList.scrollHeight;
  },

  render: function() {
    const cx = classNames({
      'messages': true
    });

    const { messages = {} } = this.props;
    let msgs = <div>No messages yet</div>;
    let ids = Object.keys(messages);
    if (ids.length > 0) {
      msgs = ids.map(id => {
        const msg = messages[id];
        // TODO: Use Message here
        //return <Message { ...msg } key={ id } />
        return <div/>
      });
    }

    return (
      <div className={ cx } ref='messageList'>
        { msgs }
      </div>
    );
  }
});
