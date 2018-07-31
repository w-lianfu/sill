// @flow
import * as React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

const styles = {}

type Props = {
  name: string;
}

type State = {
  value: number;
}

class MDNav extends React.Component<Props, State> {
  state = { value: 0 }

  onChange = (event: any, value: number) => {
    console.log(value);
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <BottomNavigation value={value} showLabels onChange={this.onChange}>
        <BottomNavigationAction label="微博" icon={<HomeIcon />} />
        <BottomNavigationAction label="消息" icon={<EmailIcon />} />
        <BottomNavigationAction label="发现" icon={<SearchIcon />} />
        <BottomNavigationAction label="我" icon={<PersonIcon />} />
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(MDNav);
