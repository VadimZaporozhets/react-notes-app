import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NOTE_STATUSES} from '../../constants';
import DoneNotesComponent from '../../components/done-notes/DoneNotesComponent';
import {markNoteAsUndone, archiveNote} from '../../redux/modules/notes';

const showDoneNotes = note => note.status === NOTE_STATUSES.done;

const filterDoneNotes = notes => {
    return notes.filter(showDoneNotes);
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
        const {notes, markNoteAsUndoneAction, archiveNoteAction} = this.props;
        const {searchQuery} = this.state;

        const searchedNotes = notes.filter(note => {
            return searchQuery === '' || note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.text.toLowerCase().includes(searchQuery.toLowerCase());
        });

        return (
            <DoneNotesComponent onSearchChange={this.searchNotes} searchValue={searchQuery} primaryBtnAction={markNoteAsUndoneAction} secondaryBtnAction={archiveNoteAction} notes={searchedNotes}/>
        );
    }
}

const mapStateToProps = state => ({
    notes: filterDoneNotes(state.notes)
});

const mapDispatchToProps = dispatch => ({
    markNoteAsUndoneAction: (id) => {
        dispatch(markNoteAsUndone(id));
    },
    archiveNoteAction: (id) => {
        dispatch(archiveNote(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNotes);