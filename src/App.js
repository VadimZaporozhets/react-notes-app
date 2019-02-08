import React, { Component } from 'react';
import Header from './app/components/shared/HeaderComponent';
import SideMenu from './app/components/shared/SideMenuComponent';
import {createStore, applyMiddleware, compose} from  'redux';
import {Provider} from 'react-redux';
import reducer from './app/redux/modules/reducer';
import APIMiddleware from './app/redux/middleware/API-middleware';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNotes from './app/containers/main-notes/MainNotesContainer';
import EditNote from './app/containers/edit-note/EditNoteContainer';
import CreateNote from './app/containers/create-note/CreateNoteContainer';
import DoneNotes from './app/containers/done-notes/DoneNotesContainer';
import ArchiveNotes from './app/containers/archive-notes/ArchiveNotesContainer';
import {loadInitialNotes} from './app/redux/modules/notes';
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(APIMiddleware)
);
const store = createStore(reducer, enhancer);

store.dispatch(loadInitialNotes());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App" style={{display: 'flex'}}>
                    <Header/>
                    <SideMenu/>
                    <Switch>
                        <Route exact path="/" component={MainNotes}/>
                        <Route path="/done-notes" component={DoneNotes}/>
                        <Route path="/note/:id" component={EditNote}/>
                        <Route path="/create-note" component={CreateNote}/>
                        <Route path="/archive" component={ArchiveNotes}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
