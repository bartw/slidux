import Slide from '../models/Slide';

const initialPresentationState = {
    show: false,
    currentIndex: 0
};

const initialState = (() => {
    const slide = new Slide();
    return {
        slides: [slide],
        selectedId: slide.id,
        username: '',
        password: '',
        gistUrl: '',
        isDark: true,
        presentation: initialPresentationState
    }
})();

export default initialState;