import { ADD_SLIDE, REMOVE_SLIDE, SELECT_SLIDE, UPDATE_CONTENT, MOVE_UP, MOVE_DOWN, OPEN_EXPORT, CLOSE_EXPORT, UPDATE_USERNAME, UPDATE_PASSWORD, CREATE_GIST_NOTIFY, SWITCH_THEME, START_PRESENTATION, STOP_PRESENTATION, PREVIOUS_SLIDE, NEXT_SLIDE, CLEAR } from '../actions';
import Slide from '../models/Slide';
import initialState from './initialState';

const slidux = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SLIDE:
            const newSlide = new Slide();
            return { ...state, slides: state.slides.concat(newSlide), selectedId: newSlide.id };
        case REMOVE_SLIDE:
            return { ...state, slides: state.slides.filter(slide => slide.id !== state.selectedId) };
        case SELECT_SLIDE:
            return { ...state, selectedId: action.id };
        case UPDATE_CONTENT:
            return { ...state, slides: state.slides.map(slide => slide.id === state.selectedId ? { ...slide, content: action.content } : slide) };
        case MOVE_UP:
            return { ...state, slides: move(state.selectedId, state.slides, -1) };
        case MOVE_DOWN:
            return { ...state, slides: move(state.selectedId, state.slides, 1) };
        case OPEN_EXPORT:
            return { ...state, exported: state.slides.map(slide => slide.content).join('\n\n----------\n\n') };
        case CLOSE_EXPORT:
            return { ...state, exported: '', username: '', password: '', gistUrl: '' };
        case UPDATE_USERNAME:
            return { ...state, username: action.username };
        case UPDATE_PASSWORD:
            return { ...state, password: action.password };
        case CREATE_GIST_NOTIFY:
            return { ...state, gistUrl: action.gistUrl };
        case SWITCH_THEME:
            return { ...state, isDark: !state.isDark };
        case START_PRESENTATION:
            return { ...state, showPresentation: true, currentIndex: 0 };
        case STOP_PRESENTATION:
            return { ...state, showPresentation: false };
        case PREVIOUS_SLIDE:
            return { ...state, currentIndex: state.currentIndex > 0 ? state.currentIndex - 1 : state.currentIndex };
        case NEXT_SLIDE:
            return { ...state, currentIndex: state.currentIndex < state.slides.length - 1 ? state.currentIndex + 1 : state.currentIndex };
        case CLEAR:
            return { ...initialState };
        default:
            return state;
    }
};

function move(id, array, offset) {
    const pos = array.map(item => item.id).indexOf(id);
    const newPos = pos + offset;
    if (pos === -1 || newPos < 0 || newPos > array.length - 1) {
        return array;
    }
    const itemToMove = array.find(item => item.id === id);
    const newArray = array.filter(item => item.id !== id);
    newArray.splice(pos + offset, 0, itemToMove);
    return newArray;
}

export default slidux;