import React, { Component } from 'react';
import {
  withRouter, RouteComponentProps
} from 'react-router-dom';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MenuIcon from '@material-ui/icons/Menu';

interface Props extends RouteComponentProps{

}

interface State{
    isDrawerOpen: boolean
}

class Navbar extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            isDrawerOpen: false
        }
    }
    toggleDrawer = () => {
        this.setState(prev => ({ isDrawerOpen: !prev.isDrawerOpen }));
    }

    go = (path: string) => {
        this.toggleDrawer();
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="navbar-block">
                <Button onClick={this.toggleDrawer}>
                    <MenuIcon />
                </Button>
                <SwipeableDrawer anchor={'left'} open={this.state.isDrawerOpen} onOpen={this.toggleDrawer} onClose={this.toggleDrawer} className="drawer">
                    <List className="nav-menu">
                        <ListItem button onClick={() => this.go('/')}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                        <ListItem button onClick={() => this.go('/notebook')}>
                            <ListItemIcon>
                                <MenuBookIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Notebook"} />
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </div>);
    }
}

// wrapping the component within the connect HOC and calling the default function directly
export default withRouter(Navbar);