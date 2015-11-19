import React from 'react';
import classNames from 'classnames';

import './index.scss';

export default React.createClass({
  displayName: 'Message',

  propTypes: {
    id: React.PropTypes.string,
    user: React.PropTypes.string,
    text: React.PropTypes.string,
    creationTime: React.PropTypes.number,
  },

  render: function() {
    const messageCx = classNames({
      'message': true
    });
    const timeCx = classNames({
      'time': true
    })
    const message = this.props;
    return (
      <div className={ messageCx }>
        <div>
          { message.user }
        </div>
        <div>
          <div>
            { message.text }
          </div>
          <div className={ timeCx }>
            { new Date(message.creationTime * 1000).toString() }
          </div>
        </div>
      </div>
    );
  }
});
