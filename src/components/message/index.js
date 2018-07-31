// @flow
import * as React from 'react';

import Nav from '@/common/components/nav';
import MessageTop from '@/common/components/MessageTop';

import './scss/message.scss';

class Message extends React.Component<{}> {
  render() {
    return (
      <div className="message">
        <MessageTop />
        <h2>Message Page...</h2>

        <Nav name="message" />
      </div>
    )
  }
}

export default Message;
