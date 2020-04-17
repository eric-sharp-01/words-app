import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  withRouter
} from 'react-router-dom';
import { Container, Fade } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Input } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import SearchIcon from '@material-ui/icons/Search';
import List  from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';

let mapStateToProps = (state: any) => {
    return {
        currentWord: state.currentWord
    }
}

let mapDispatchToProps = {
    openModal: (value: string) => ({type: "OPEN_MODAL", payload: value}),
    closeModal: () => ({type: "CLOSE_MODAL", payload: null})
}

let connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {
}

interface Definition{
    partOfSpeech: string,
    definition: string
}

interface State{
    searchText: string,
    definitions: Definition[],
    word: string | null,
    addToDict: boolean,
    isOpenAlert: boolean,
    inProgress: boolean,
    [k: string]: string | boolean | Definition[] | null;
}

class Home extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            definitions: [],
            searchText: "",
            word: null,
            addToDict: false,
            isOpenAlert: false,
            inProgress: false
        }
    }

    componentDidMount() {
        if(this.props.currentWord){
            this.setState({ searchText: this.props.currentWord }, this.search);
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>){
    }

    search = () => {
        if(!this.state.searchText) return;
        
        this.setState({inProgress: true});
        let text = this.state.searchText;
        fetch(`/api/words?name=${text}`).then(res => res.json()).then(res => {
            if(!res.data){
                this.setState({ definitions: [], addToDict: false });
                return;
            }
            let definitions = res.data.definitions.sort((a: Definition, b:Definition) => (a.partOfSpeech > b.partOfSpeech ? 1 : -1));
            let addToDict = res.addToDict;
            this.setState({ definitions, addToDict, inProgress: false });
        });
    }

    add = () => {
        this.setState({ inProgress: true });
        let word = this.state.searchText;
        fetch(`/api/words`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ addToDict: false, isOpenAlert: data.flag });
            })
            .catch((error) => {
                console.error('Error:', error);
                this.setState({ inProgress: false });
                alert();
        });
    }

    enter = (e: React.KeyboardEvent) => {
        if (e.which !== 13) return;
        this.search();
    }

    change = (field: string, value: string) => {
        this.setState({
            [field]: value
        });
    }

    closeAlert = () => {
        this.setState(prev => ({
            isOpenAlert: !prev.isOpenAlert
        }));
    }

    render() {
        let wordList = null;
        if(this.state.inProgress){
            wordList = <LinearProgress />;
        }else{
            if(this.state.definitions.length){
                let list = this.state.definitions.map((item: Definition, index) => {
                    return <React.Fragment key={index}>
                            <ListItem button>
                                <ListItemText primary={item.definition} secondary={item.partOfSpeech} />
                            </ListItem>
                            <Divider component="li" />
                        </React.Fragment>;
                });
        
                wordList = <List className="word-list">
                    {list}
                </List>;
            }
        }
        return (
        <Container maxWidth="lg" fixed className="home">
            <div className="home-header">
                <div className="text-block">
                    WORDS
                </div>
            </div>
            <div className="home-main">
                <div className="word-search">
                    <Paper component="div" elevation={3}  className="paper">
                        <Input 
                            type="text" 
                            onKeyPress={this.enter} 
                            className="input-base flex-1" 
                            value={this.state.searchText} 
                            onChange={(e) => this.change('searchText', e.target.value)} 
                        />
                        <IconButton type="button" className="icon-button" aria-label="search" onClick={this.search}>
                            <SearchIcon />
                        </IconButton>
                        <Divider className="divider" orientation="vertical" />
                        <IconButton color="primary" className="icon-button" disabled={!this.state.addToDict} onClick={this.add}>
                            <AddToPhotosIcon />
                        </IconButton>
                    </Paper>
                </div>
                {wordList}
                <Snackbar open={this.state.isOpenAlert} autoHideDuration={2000} onClose={this.closeAlert} TransitionComponent={Fade}>
                    <MuiAlert elevation={6} variant="filled" onClose={this.closeAlert} severity="success">
                        The word is saved.
                    </MuiAlert>
                </Snackbar>
            </div>
        </Container>);
    }
}

export default withRouter(connector(Home));