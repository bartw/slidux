import { ADD_SLIDE, REMOVE_SLIDE, SELECT_SLIDE, UPDATE_CONTENT, MOVE_UP, MOVE_DOWN, SWITCH_THEME, CLEAR, IMPORT_SLIDES_NOTIFY, UPDATE_IMPORT_URL } from '../actions';
import Slide from '../models/Slide';
import initialState from './initialState';

const rootReducer = (state, action) => {
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
        case SWITCH_THEME:
            return { ...state, isDark: !state.isDark };
        case CLEAR:
            return { ...initialState };
        case IMPORT_SLIDES_NOTIFY:
            if (!action.text) {
                return { ...initialState };
            }
            const slides = action.text.split('\n\n----------\n\n').map((slide, index) => ({ id: index, content: slide }));
            return { ...initialState, slides: slides };
        case UPDATE_IMPORT_URL:
            return { ...state, importUrl: action.importUrl };
        default:
            return state;
    }
};

export default rootReducer;

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