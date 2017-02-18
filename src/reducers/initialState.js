import Slide from '../models/Slide';

const initialState = (() => {
    const slide = new Slide();
    return {
        slides: [slide],
        selectedId: slide.id,
        username: '',
        password: '',
        gistUrl: ''
    }
})();

export default initialState;