import rootReducer from './rootReducer';
import presentation from './presentationReducer';
import initialState from './initialState';

const slidux = (state = initialState, action) => {
    let newState = rootReducer(state, action);
    newState.presentation = presentation(state.presentation, action, state.slides ? state.slides.length : 0);
    return newState;
}

export default slidux;