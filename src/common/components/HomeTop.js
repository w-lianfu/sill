// @flow
import * as React from 'react';

import { HomeTopComp, FlexBox, SillButton } from '@/common/styled/styled';

type State = {
  title: string;
};

class HomeTop extends React.Component<{}, State> {
  state = {
    title: "hot"
  }

  changeTitle = (newTitle: string) => this.setState({ title: newTitle });

  render() {
    const { title } = this.state;
    return (
      <HomeTopComp>
        <li>
          <FlexBox>
            <i className="iconfont icon-camera size26"></i>
          </FlexBox>
        </li>
        <li>
          <SillButton height="41px"
            onClick={this.changeTitle.bind(this, "follow")}
            className={[title === "follow" ? "active" : "", "bold size16"].join(" ")}>
            关注
            {/*<i className="iconfont icon-dot"></i>*/}
          </SillButton>
          <SillButton height="41px"
            onClick={this.changeTitle.bind(this, "hot")}
            className={[title === "hot" ? "active" : "", "bold size16"].join(" ")}>
            热门
          </SillButton>
        </li>
        <li>
          <FlexBox>
            <i className="iconfont icon-scan size26"></i>
          </FlexBox>
        </li>
      </HomeTopComp>
    )
  }
}

export default HomeTop;
