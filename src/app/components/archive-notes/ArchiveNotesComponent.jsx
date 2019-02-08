import React, {Fragment} from 'react';
import ScreenDeck from '../shared/ScreenDeckComponent';
import SearchComponent from '../shared/SearchComponent';
import CardComponent from '../shared/CardComponent';
import Typograpthy from '@material-ui/core/Typography';

const ArchiveNotes = ({notes, secondaryBtnAction, primaryBtnAction, onSearchChange, searchValue}) => {
    return (
        <ScreenDeck title={'Archive'}>
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
                            primaryBtnText={'Restore'}
                            primaryBtnAction={primaryBtnAction}
                            secondaryBtnText={'Delete'}
                            secondaryBtnAction={secondaryBtnAction} />
                    })}
                </Fragment>
                :
                <Typograpthy>
                    You have no Archived Notes. Click 'Create Note' Button to add Note.
                </Typograpthy>
            }
        </ScreenDeck>
    );
};

export default ArchiveNotes;