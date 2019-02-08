import React, {Fragment} from 'react';
import ScreenDeck from '../shared/ScreenDeckComponent';
import SearchComponent from '../shared/SearchComponent';
import CardComponent from '../shared/CardComponent';
import Typograpthy from '@material-ui/core/Typography';

const MainNotes = ({notes, primaryBtnAction, secondaryBtnAction, onSearchChange, searchValue}) => {
    return (
        <ScreenDeck title={'Notes'}>
            {notes.length ?
                <Fragment>
                    <SearchComponent searchValue={searchValue} onSearchChange={onSearchChange}/>
                    {notes.map(note => {
                        return <CardComponent
                            key={note.id}
                            noteId={note.id}
                            title={note.title}
                            text={note.text}
                            isEditable={note.isEditable}
                            primaryBtnText={'Mark as Done'}
                            secondaryBtnText={'Archive'}
                            primaryBtnAction={primaryBtnAction}
                            secondaryBtnAction={secondaryBtnAction} />
                    })}
                </Fragment>
                :
                <Typograpthy>
                    You have no Active Notes. Click 'Create Note' Button to add Note.
                </Typograpthy>
            }

        </ScreenDeck>
    );
};

export default MainNotes;