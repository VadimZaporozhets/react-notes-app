import React, {Fragment} from 'react';
import ScreenDeck from '../shared/ScreenDeckComponent';
import SearchComponent from '../shared/SearchComponent';
import CardComponent from '../shared/CardComponent';
import Typograpthy from '@material-ui/core/Typography';

const DoneNotes = ({notes, primaryBtnAction, secondaryBtnAction, onSearchChange, searchValue}) => {
    return (
        <ScreenDeck title={'Done Notes'}>
            {notes.length ?
                <Fragment>
                    <SearchComponent onSearchChange={onSearchChange} searchValue={searchValue}/>
                    {notes.map(note => {
                        return <CardComponent
                            key={note.id}
                            noteId={note.id}
                            title={note.title}
                            text={note.text}
                            isEditable={note.isEditable}
                            primaryBtnText={'Mark as Undone'}
                            secondaryBtnText={'Archive'}
                            primaryBtnAction={primaryBtnAction}
                            secondaryBtnAction={secondaryBtnAction} />
                    })}
                </Fragment>
                :
                <Typograpthy>
                    You have no Done Notes. Click 'Create Note' Button to add Note.
                </Typograpthy>
            }
        </ScreenDeck>
    );
};

export default DoneNotes;