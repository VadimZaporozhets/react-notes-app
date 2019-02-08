import React from 'react';
import ScreenDeck from '../shared/ScreenDeckComponent';
import TextField from '@material-ui/core/TextField';
import SaveCancelPannel from '../shared/SaveCancelButtonsComponent';

const CreateNote = ({titleValue, textValue, handleTitleChange, handleTextChange, handleCancel, handleSave}) => {
    return (
        <ScreenDeck title={'Create Note'}>
            <TextField
                id="standard-full-width"
                label="Note title"
                fullWidth
                margin="normal"
                value={titleValue}
                onChange={handleTitleChange}
            />
            <TextField
                id="standard-full-width"
                label="Note text"
                fullWidth
                margin="normal"
                multiline
                value={textValue}
                onChange={handleTextChange}
            />
            <SaveCancelPannel onSave={handleSave} onCancel={handleCancel}/>
        </ScreenDeck>
    );
};

export default CreateNote;