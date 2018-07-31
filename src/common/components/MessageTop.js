// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import { HomeTopComp, FlexBox, SillButton } from '@/common/styled/styled';

type State = {
  title: string;
};

class MessageTop extends React.Component<{}, State> {
  state = {
    title: 'message'
  }

  changeTitle = (newTitle: string) => this.setState({ title: newTitle });

  render() {
    let { title } = this.state;
    return (
      <HomeTopComp>
        <li>
          <FlexBox>
            <Link to="/find-group" className="size15">发现群</Link>
          </FlexBox>
        </li>
        <li>
          <SillButton height="41px"
            onClick={this.changeTitle.bind(this, "notice")}
            className={[title === "notice" ? "active" : "", "bold size16"].join(" ")}>
            通知
            <i className="iconfont icon-dot"></i>
          </SillButton>
          <SillButton height="41px"
            onClick={this.changeTitle.bind(this, "message")}
            className={[title === "message" ? "active" : "", "bold size16"].join(" ")}>
            消息
          </SillButton>
        </li>
        <li>
          <FlexBox>
            <i className="iconfont icon-message size26"></i>
          </FlexBox>
        </li>
      </HomeTopComp>
    )
  }
}

export default MessageTop;
