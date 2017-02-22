import { OPEN_EXPORT, CLOSE_EXPORT, UPDATE_USERNAME, UPDATE_PASSWORD, CREATE_GIST_NOTIFY } from '../actions';

const exportReducer = (state, action, slides) => {
    switch (action.type) {
        case OPEN_EXPORT:
            return { ...state, exported: slides.map(slide => slide.content).join('\n\n----------\n\n') };
        case CLOSE_EXPORT:
            return { ...state, exported: '', username: '', password: '', gistUrl: '' };
        case UPDATE_USERNAME:
            return { ...state, username: action.username };
        case UPDATE_PASSWORD:
            return { ...state, password: action.password };
        case CREATE_GIST_NOTIFY:
            return { ...state, gistUrl: action.gistUrl };
        default:
            return state;
    }
};

export default exportReducer;