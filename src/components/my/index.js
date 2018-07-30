// @flow
import * as React from 'react';

import Nav from '@/common/components/nav';

class My extends React.Component<{}> {
  render() {
    return (
      <div>
        <h2>My Page...</h2>

        <Nav name="my" />
      </div>
    )
  }
}

export default My;
