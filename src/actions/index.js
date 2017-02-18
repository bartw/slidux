export const ADD_SLIDE = 'ADD_SLIDE';
export const REMOVE_SLIDE = 'REMOVE_SLIDE';
export const SELECT_SLIDE = 'SELECT_SLIDE';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CONTENT = 'UPDATE_CONTENT';
export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_DOWN';

export const addSlide = () => ({ type: ADD_SLIDE });
export const removeSlide = () => ({ type: REMOVE_SLIDE });
export const selectSlide = (id) => ({ type: SELECT_SLIDE, id: id });
export const updateName = (name) => ({ type: UPDATE_NAME, name: name });
export const updateContent = (content) => ({ type: UPDATE_CONTENT, content: content });
export const moveUp = () => ({ type: MOVE_UP });
export const moveDown = () => ({ type: MOVE_DOWN });