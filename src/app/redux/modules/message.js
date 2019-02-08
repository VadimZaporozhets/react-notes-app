import {MESSAGE_TYPES} from '../../constants';

const SHOW_MESSAGE = 'react-notes/message/SHOW_MESSAGE';
const HIDE_MESSAGE = 'react-notes/message/HIDE_MESSAGE';

const initialState = {
    message: '',
    messageType: MESSAGE_TYPES.info
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MESSAGE:
            const {message, messageType} = action.payload;
            return {
                message,
                messageType
            };
        case HIDE_MESSAGE:
            return {message: ''};
        default:
            return state
    }
};

export default reducer;

export function showMessage(messageType, message) {
    return {
        type: SHOW_MESSAGE,
        payload: {
            messageType,
            message
        }
    }
}

export function hideMessage() {
    return {
        type: HIDE_MESSAGE
    }
}