import {CALL_API} from '../middleware/API-middleware';
import {NOTE_STATUSES, requestsTypes, GET_ALL_NOTES} from '../../constants';

const CREATE_NOTE = 'react-notes/notes/ADD_NOTE';
const UPDATE_NOTE = 'react-notes/notes/UPDATE_NOTE';
const DELETE_NOTE = 'react-notes/notes/DELETE_NOTE';
const ARCHIVE_NOTE = 'react-notes/notes/ARCHIVE_NOTE';
const MARK_NOTE_AS_DONE = 'react-notes/notes/MARK_NOTE_AS_DONE';
const MARK_NOTE_AS_UNDONE = 'react-notes/notes/MARK_NOTE_AS_UNDONE';
const RESTORE_NOTE = 'react-notes/notes/RESTORE_NOTE';
const LOAD_INITIAL_NOTES = 'react-notes/notes/LOAD_INITIAL_NOTES';

const reducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_INITIAL_NOTES:
            return action.payload;
        case CREATE_NOTE:
            return [...state, {
                id: action.payload.id.toString(),
                text: action.payload.text,
                title: action.payload.title,
                status: NOTE_STATUSES.active,
                isEditable: true
            }];
        case UPDATE_NOTE:
            return state.map(note => {
                if (note.id.toString() === action.payload.id.toString()) {
                    note.text = action.payload.text;
                    note.title = action.payload.title;
                }
                return note;
            });
        case ARCHIVE_NOTE:
            return state.map((note) => {
                if (note.id.toString() === action.payload.toString()) {
                    note.status = NOTE_STATUSES.archived;
                    note.isEditable = false;
                }
                return note;
            });
        case DELETE_NOTE:
            return state.filter(note => note.id.toString() !== action.payload.toString());
        case MARK_NOTE_AS_DONE:
            return state.map((note) => {
                if (note.id.toString() === action.payload.toString()) {
                    note.status = NOTE_STATUSES.done;
                }
                return note;
            });
        case MARK_NOTE_AS_UNDONE:
            return state.map((note) => {
                if (note.id.toString() === action.payload.toString()) {
                    note.status = NOTE_STATUSES.active;
                }
                return note;
            });
        case RESTORE_NOTE:
            return state.map((note) => {
                if (note.id.toString() === action.payload.toString()) {
                    note.status = NOTE_STATUSES.active;
                    note.isEditable = true;
                }
                return note;
            });
        default:
            return state;
    }
};

export default reducer;

export function createNote(noteObj) {
    return {
        type: CREATE_NOTE,
        payload: noteObj
    }
}

export function deleteNote(noteId) {
    return {
        type: DELETE_NOTE,
        payload: noteId
    }
}

export function updateNote(noteData) {
    return {
        type: UPDATE_NOTE,
        payload: noteData
    }
}

export function archiveNote(noteId) {
    return {
        type: ARCHIVE_NOTE,
        payload: noteId
    }
}

export function restoreNote(noteId) {
    return {
        type: RESTORE_NOTE,
        payload: noteId
    }
}

export function markNoteAsDone(noteId) {
    return {
        type: MARK_NOTE_AS_DONE,
        payload: noteId
    }
}

export function markNoteAsUndone(noteId) {
    return {
        type: MARK_NOTE_AS_UNDONE,
        payload: noteId
    }
}

export function loadInitialNotes() {
    return {
        type: CALL_API,
        meta: {
            url: GET_ALL_NOTES,
            method: requestsTypes.get,
            actionTypes: ['', LOAD_INITIAL_NOTES, '']
        }
    }
}