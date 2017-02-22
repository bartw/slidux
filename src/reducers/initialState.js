import Slide from '../models/Slide';

const initialPresentationState = {
    show: false,
    currentIndex: 0
};

const initialExportState = {
    username: '',
    password: '',
    gistUrl: '',
    show: false
}

const initialState = (() => {
    const slide = new Slide();
    return {
        slides: [slide],
        selectedId: slide.id,
        isDark: true,
        export: initialExportState,
        presentation: initialPresentationState
    }
})();

export default initialState;