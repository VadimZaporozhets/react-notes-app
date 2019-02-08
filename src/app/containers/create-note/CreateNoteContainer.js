import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateNoteComponent from '../../components/create-note/CreateNoteComponent';
import {createNote} from "../../redux/modules/notes";
import {generateRandomId} from '../../helpers';

class CreateNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            text: ''
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
        const {createNoteAction} = this.props;
        const {title, text} = this.state;

        if (title.length > 0 && text.length > 0) {
            createNoteAction({
                id: generateRandomId(),
                title: title,
                text: text
            });
            this.props.history.push('/');
        } else {
            alert('Please enter Note title and Note text.')
        }
    };

    render() {
        const {title, text} = this.state;
        return (
            <CreateNoteComponent titleValue={title} textValue={text} handleCancel={this.getBack} handleSave={this.handleSave} handleTextChange={this.handleTextChange} handleTitleChange={this.handleTitleChange}/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createNoteAction: (note) => {
        dispatch(createNote(note));
    }
});

export default connect(null, mapDispatchToProps)(CreateNote);