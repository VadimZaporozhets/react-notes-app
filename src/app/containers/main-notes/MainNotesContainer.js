import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NOTE_STATUSES} from '../../constants';
import MainNotesComponent from '../../components/main-notes/MainNotestComponent';
import {markNoteAsDone, archiveNote} from '../../redux/modules/notes';

const showActiveNotes = note => note.status === NOTE_STATUSES.active;

const filterActiveNotes = notes => {
    return notes.filter(showActiveNotes);
};

class MainNotes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ''
        };
    }

    searchNotes = (e) => {
        this.setState({
            searchQuery: e.target.value
        });
    };

    render() {
        const {markNoteAsDoneAction, archiveNoteAction, notes} = this.props;
        const {searchQuery} = this.state;

        const searchedNotes = notes.filter(note => {
            return searchQuery === '' || note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.text.toLowerCase().includes(searchQuery.toLowerCase());
        });

        return (
            <MainNotesComponent onSearchChange={this.searchNotes} searchValue={searchQuery} primaryBtnAction={markNoteAsDoneAction} secondaryBtnAction={archiveNoteAction} notes={searchedNotes}/>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.notes && filterActiveNotes(state.notes)
});

const mapDispatchToProps = dispatch => ({
    markNoteAsDoneAction: (id) => {
        dispatch(markNoteAsDone(id));
    },
    archiveNoteAction: (id) => {
        dispatch(archiveNote(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNotes);