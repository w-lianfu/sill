// @flow
import * as React from 'react';

import './scss/hot.scss';

class Hot extends React.Component<{}> {
  render() {
    return (
      <div className="hot">
        <p className="hot-header-list">
          <button className="active">推荐</button>
          <button>附近</button>
          <button>榜单</button>
          <button>明星</button>
          <button>搞笑</button>
          <button>情感</button>
          <button>新时代</button>
          <button>社会</button>
          <button>上海</button>
          <button>电影</button>
          <button>游戏</button>
          <button>汽车</button>
          <button>星座</button>
        </p>
      </div>
    )
  }
}

export default Hot;
