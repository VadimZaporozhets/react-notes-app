import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditNoteComponent from '../../components/edit-note/EditNoteComponent';
import {updateNote} from '../../redux/modules/notes';

const findCurrentNote = (notes, noteId) => {
    return notes.find(note => note.id.toString() === noteId);
};

class EditNote extends Component {
    constructor(props) {
        super(props);

        this.noteId = props.match.params.id;
        console.log(props);
        const {currentNote} = props;

        this.state = {
            title:  currentNote.title,
            text:  currentNote.text
        };
    }

    getBack = () => {
        this.props.history.goBack();
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    handleSave = () => {
        const {updateNoteAction, history} = this.props;
        const {title, text} = this.state;

        if (title.length > 0 && text.length > 0) {
            updateNoteAction({
                id: this.noteId,
                title: title,
                text: text
            });
            history.goBack();
        } else {
            alert('Please enter Note title and Note text.')
        }
    };

    render() {
        const {title, text} = this.state;
        return (
            <EditNoteComponent titleValue={title} textValue={text} handleCancel={this.getBack} handleSave={this.handleSave} handleTextChange={this.handleTextChange} handleTitleChange={this.handleTitleChange}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentNote: findCurrentNote(state.notes, ownProps.match.params.id)
});

const mapDispatchToProps = dispatch => ({
    updateNoteAction: (note) => {
        console.log(note);
        dispatch(updateNote(note));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);