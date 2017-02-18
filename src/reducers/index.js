import { ADD_SLIDE, REMOVE_SLIDE, SELECT_SLIDE, UPDATE_NAME, UPDATE_CONTENT, MOVE_UP, MOVE_DOWN } from '../actions';
import Slide from '../models/Slide';
import initialState from './initialState';

const slidux = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SLIDE:
            return { ...state, slides: state.slides.concat(new Slide()) };
        case REMOVE_SLIDE:
            return { ...state, slides: state.slides.filter(slide => slide.id !== state.selectedId) };
        case SELECT_SLIDE:
            return { ...state, selectedId: action.id };
        case UPDATE_NAME:
            return { ...state, slides: state.slides.map(slide => slide.id === state.selectedId ? { ...slide, name: action.name } : slide) };
        case UPDATE_CONTENT:
            return { ...state, slides: state.slides.map(slide => slide.id === state.selectedId ? { ...slide, content: action.content } : slide) };
        case MOVE_UP:
            return { ...state, slides: move(state.selectedId, state.slides, -1) };
        case MOVE_DOWN:
            return { ...state, slides: move(state.selectedId, state.slides, 1) };
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