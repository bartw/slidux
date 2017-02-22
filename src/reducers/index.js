import rootReducer from './rootReducer';
import presentationReducer from './presentationReducer';
import exportReducer from './exportReducer';
import initialState from './initialState';

const slidux = (state = initialState, action) => {
    const rootState = rootReducer(state, action);
    const presentationState = presentationReducer(state.presentation, action, state.slides ? state.slides.length : 0);
    const exportState = exportReducer(state.export, action);
    return { ...rootState, presentation: presentationState, export: exportState };
}

export default slidux;