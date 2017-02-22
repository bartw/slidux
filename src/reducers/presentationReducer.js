import { START_PRESENTATION, STOP_PRESENTATION, PREVIOUS_SLIDE, NEXT_SLIDE } from '../actions';

const presentationReducer = (state, action, numberOfSlides) => {
    switch (action.type) {
        case START_PRESENTATION:
            return { ...state, show: true, currentIndex: 0 };
        case STOP_PRESENTATION:
            return { ...state, show: false };
        case PREVIOUS_SLIDE:
            return { ...state, currentIndex: state.currentIndex > 0 ? state.currentIndex - 1 : state.currentIndex };
        case NEXT_SLIDE:
            return { ...state, currentIndex: state.currentIndex < numberOfSlides - 1 ? state.currentIndex + 1 : state.currentIndex };
        default:
            return state;
    }
}

export default presentationReducer;