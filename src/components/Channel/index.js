import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import Messages from '../Messages';
import MessageInput from '../MessageInput';

import { loadMessages } from '../../actions/messages';

import './index.scss';

const Channel = React.createClass({
  displayName: 'Channel',

  propTypes: {
    messages: React.PropTypes.object,
    dispatch: React.PropTypes.func,
  },

  componentDidMount: function() {
    const { dispatch } = this.props;

    dispatch(loadMessages());
  },

  render: function() {
    const { messages } = this.props;
    const cx = classNames({
      'channel': true,
      'flex-column': true,
    });

    return (
      <div className={ cx }>
        <Messages messages={ messages } />
        <MessageInput />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    messages: state.channelMessages.messages
  }
}

export default connect(mapStateToProps)(Channel);
