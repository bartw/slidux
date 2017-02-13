import { ADD_SLIDE, REMOVE_SLIDE, SELECT_SLIDE, UPDATE_NAME, UPDATE_CONTENT } from '../actions';
import Slide from '../models/Slide';

const initialState = {
    slides: [new Slide()],
    selectedId: 0
};

const slidux = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SLIDE:
            return { ...state, slides: state.slides.concat(new Slide()) };
        case REMOVE_SLIDE:
            return { ...state, slides: state.slides.filter(slide => slide.id !== action.id) };
        case SELECT_SLIDE:
            return { ...state, selectedId: action.id };
        case UPDATE_NAME:
            return { ...state, slides: state.slides.map(slide => slide.id === action.id ? { ...slide, name: action.name } : slide) };
        case UPDATE_CONTENT:
            return { ...state, slides: state.slides.map(slide => slide.id === action.id ? { ...slide, content: action.content } : slide) };
        default:
            return state;
    }
};

export default slidux;