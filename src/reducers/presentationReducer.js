import { START_PRESENTATION, STOP_PRESENTATION, PREVIOUS_SLIDE, NEXT_SLIDE } from '../actions';

const presentation = (state, action, numberOfSlides) => {
    switch (action.type) {
        case START_PRESENTATION:
            return { ...state, show: true, currentIndex: 0 };
        case STOP_PRESENTATION:
            return { ...state, show: false };
        case PREVIOUS_SLIDE:
            return { ...state, currentIndex: presentation.currentIndex > 0 ? presentation.currentIndex - 1 : presentation.currentIndex };
        case NEXT_SLIDE:
            return { ...state, currentIndex: presentation.currentIndex < numberOfSlides - 1 ? presentation.currentIndex + 1 : presentation.currentIndex };
        default:
            return state;
    }
}

export default presentation;