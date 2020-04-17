import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { connect, ConnectedProps } from 'react-redux';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Home from './components/Home';
import Notebook from './components/Notebook';
import Navbar from './components/Navbar';

let mapStateToProps = (state: any) => {
    return {
        isModalOpen: state.isModalOpen,
        modalContent: state.modalContent
    }
}

let mapDispatchToProps = {
    openModal: (value: string) => ({type: "OPEN_MODAL", payload: value}),
    closeModal: () => ({type: "CLOSE_MODAL", payload: null})
}

let connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {
}

interface State{
}

class App extends Component<Props, State> {
    constructor(props: Readonly<Props>){
        super(props);
    }

    closeModal = () => {
        this.props.closeModal();
    }

    render() {
        return (
            <Router>
                <Navbar />
                <div>
                    <Switch>
                        <Route path="/notebook" component={Notebook} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={"modal"}
                    open={this.props.isModalOpen}
                    onClose={this.closeModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.props.isModalOpen}>
                        <div className={"modal-main"}>
                            <p id="transition-modal-description">{this.props.modalContent}</p>
                        </div>
                    </Fade>
                </Modal>
            </Router>
        );
    }
}

// wrapping the component within the connect HOC and calling the default function directly

export default connect(mapStateToProps, mapDispatchToProps)(App);