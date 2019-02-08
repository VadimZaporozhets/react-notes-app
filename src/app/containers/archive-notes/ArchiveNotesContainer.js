import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NOTE_STATUSES} from '../../constants';
import ArchiveNotesComponent from '../../components/archive-notes/ArchiveNotesComponent';
import {restoreNote, deleteNote} from '../../redux/modules/notes';

const showArchivedNotes = note => note.status === NOTE_STATUSES.archived;

const filterArchivedNotes = notes => {
    return notes.filter(showArchivedNotes);
};

class ArchiveNotes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ''
        };
    }

    searchNotes = (e) => {
        this.setState({
            searchQuery: e.target.value,
        })
    };

    render() {
        const {notes, restoreAction, deleteNoteAction} = this.props;
        const {searchQuery} = this.state;

        const searchedNotes = notes.filter(note => {
            return searchQuery === '' || note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.text.toLowerCase().includes(searchQuery.toLowerCase());
        });

        return (
            <ArchiveNotesComponent onSearchChange={this.searchNotes} searchValue={searchQuery}  primaryBtnAction={restoreAction} secondaryBtnAction={deleteNoteAction} notes={searchedNotes}/>
        );
    }
}

const mapStateToProps = state => ({
    notes: filterArchivedNotes(state.notes)
});

const mapDispatchToProps = dispatch => ({
    restoreAction: (id) => {
        dispatch(restoreNote(id));
    },
    deleteNoteAction: (id) => {
        dispatch(deleteNote(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveNotes);