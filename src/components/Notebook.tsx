import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  withRouter, RouteComponentProps
} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

let mapDispatchToProps = {
    openModal: (value: string) => ({type: "OPEN_MODAL", payload: value}),
    closeModal: () => ({type: "CLOSE_MODAL", payload: null}),
    setWord: (value: string) => ({type: "SET_WORD", payload: value}),
}

let connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux, RouteComponentProps{

}

interface State{
    words: string[],
    inProgress: boolean
}


class Notebook extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            words: [],
            inProgress: true
        }
    }

    componentDidMount() {
        fetch("/api/words/all").then(res => res.json()).then(res => {
            let words = res.words.sort();
            this.setState({ words, inProgress: false });
        });
    }

    handleClick = (e:React.MouseEvent) => {
        let name = e.currentTarget.getAttribute('data-word') || "";
        this.props.setWord(name);
        this.props.history.push("/");
    }
    render() {
        let content = null;
        if(this.state.inProgress){
            content = <LinearProgress />;
        }else{
            let list = this.state.words.map((word, index) => {
                return (
                    <Grid item xs={6} sm={4} md={2} key={index}>
                        <Paper className="word-card">
                            <Button variant="contained" onClick={this.handleClick} data-word={word} color="primary">
                                {word}
                            </Button>
                        </Paper>
                    </Grid>
                );
            });
            content = <Grid container spacing={1}>{list}</Grid>
        }

        return <Container maxWidth="lg" fixed className="notebook">
            <h4>Notebook</h4>
            <Grid container spacing={1} className="grid-container">
                {content}
            </Grid>
        </Container>;
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Notebook));