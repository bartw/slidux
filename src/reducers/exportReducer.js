import { OPEN_EXPORT, CLOSE_EXPORT, UPDATE_USERNAME, UPDATE_PASSWORD, EXPORT_NOTIFY } from '../actions';

const exportReducer = (state, action) => {
    switch (action.type) {
        case OPEN_EXPORT:
            return { ...state, show: true };
        case CLOSE_EXPORT:
            return { ...state, show: false, username: '', password: '', notification: '' };
        case UPDATE_USERNAME:
            return { ...state, username: action.username };
        case UPDATE_PASSWORD:
            return { ...state, password: action.password };
        case EXPORT_NOTIFY:
            return { ...state, notification: action.notification };
        default:
            return state;
    }
};

export default exportReducer;