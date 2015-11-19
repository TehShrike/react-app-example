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
    const cx = classNames({
      'message': true
    });
    const message = this.props;
    console.log('trying to display', message)
    return (
      <div className={ cx }>
        <div>
          { message.user }
        </div>
        <div>
          <div>
            { message.text }
          </div>
          <div>
            { new Date(message.creationTime).toString() }
          </div>
        </div>
      </div>
    );
  }
});
