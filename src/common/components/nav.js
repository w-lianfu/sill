// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import SNav from '../styled/SNav';

const styles = theme => ({
  buttonRoot: {
    padding: 0,
    margin: 0,
    minWidth: 'auto',
    minHeight: 'auto',
  },
  iconRoot: {
    fontSize: '37px'
  }
});

type Props = {
  name: string;
  classes: any;
};

class Nav extends React.Component<Props> {

  onAdd = () => {
    console.log('hi');
  }

  render() {
    const { name, classes } = this.props;
    return (
      <SNav>
        <Link to="/" className={name === "home" ? "active" : ""}>
          <i className={[name === "home" ? "none" : "", "iconfont icon-home"].join(" ")}></i>
          <i className={[name === "home" ? "" : "none", "iconfont icon-home-fill"].join(" ")}></i>
          <label>微博</label>
        </Link>
        <Link to="/message" className={name === "message" ? "active" : ""}>
          <i className={[name === "message" ? "none" : "", "iconfont icon-message"].join(" ")}></i>
          <i className={[name === "message" ? "" : "none", "iconfont icon-message-fill"].join(" ")}></i>
          <label>消息</label>
        </Link>
        <div>
          <Button variant="contained" color="secondary" size="large"
            className={classNames(classes.buttonRoot)} disableRipple={true}
            onClick={this.onAdd.bind(this)}>
            <Icon className={classNames(classes.iconRoot)}>add</Icon>
          </Button>
        </div>
        <Link to="/discover" className={name === "discover" ? "active" : ""}>
        <i className={[name === "discover" ? "none" : "", "iconfont icon-compass"].join(" ")}></i>
        <i className={[name === "discover" ? "" : "none", "iconfont icon-compass-fill"].join(" ")}></i>
          <label>发现</label>
        </Link>
        <Link to="/my" className={name === "my" ? "active" : ""}>
          <i className={[name === "my" ? "none" : "", "iconfont icon-my"].join(" ")}></i>
          <i className={[name === "my" ? "" : "none", "iconfont icon-my-fill"].join(" ")}></i>
          <label>我</label>
        </Link>
      </SNav>
    )
  }
}

export default withStyles(styles)(Nav);
