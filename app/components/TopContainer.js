import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import { Link } from 'react-router'
import SampleStore from '../stores/SampleStore';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Charts from './Charts';

class _TopContainer extends Component {
  static getStores() {
    return [SampleStore];
  }

  static calculateState() {
    return {
      sample: SampleStore.getState()
    };
  }

  componentDidMount() {
  }

  getStyles() {
    const heroku = "#79589f"
    return {
      container: {
        display: 'flex',
        width: '100%',
      },
      navi:{
        backgroundColor: heroku,
        color: 'white',
      },
      header: {
        backgroundColor: heroku,
        color: 'white',
      },
      leftMenu: {
        order:1,
        flex:1,
        color: heroku,
      },
      main: {
        order:2,
        flex:10,
        color: heroku,
      },
      rightMenu: {
        order:3,
        flex:1,
        color: heroku,
      },
      footer: {
        backgroundColor: heroku,
        color: 'white',
      },
      menuItem: {
        color: heroku,
      },
    }
  }

  render() {
    const styles = this.getStyles();
    return (
      <div>
        <Toolbar style={styles.navi}>
          <ToolbarTitle text="Top"/>
        </Toolbar>
        
        <div style={styles.container}>
          <Menu style={styles.leftMenu}>
            <MenuItem style={styles.menuItem}>Menu Item</MenuItem>
            <MenuItem style={styles.menuItem}>Menu Item 1</MenuItem>
            <MenuItem style={styles.menuItem}><Link to="/">Top</Link></MenuItem>
            <MenuItem style={styles.menuItem}><Link to="/sample1">Sample1</Link></MenuItem>
            <MenuItem style={styles.menuItem}><Link to="/sample2">Sample2</Link></MenuItem>
          </Menu>
          <div style={styles.main}>
            <Charts />
          </div>
          <Menu style={styles.rightMenu}>
            <MenuItem><Link to="/">Top</Link></MenuItem>
            <MenuItem><Link to="/sample1">Sample1</Link></MenuItem>
            <MenuItem><Link to="/sample2">Sample2</Link></MenuItem>
          </Menu>
        </div>

        <Toolbar style={styles.footer}>
          <ToolbarTitle text="Footer"/>
        </Toolbar>
      </div>
    );
  }
}

const TopContainer = Container.create(_TopContainer);
export default TopContainer;
