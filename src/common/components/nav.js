// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import SNav from '../styled/SNav';

class Nav extends React.Component<{}> {
  render() {
    return (
      <SNav>
        <Link to="/">
          <label>首页</label>
        </Link>
        <Link to="/">
          <label>发现</label>
        </Link>
        <Link to="/">
          <label>+</label>
        </Link>
        <Link to="/">
          <label>消息</label>
        </Link>
        <Link to="/my">
          <label>我的</label>
        </Link>
      </SNav>
    )
  }
}

export default Nav;
