export const ADD_SLIDE = 'ADD_SLIDE';
export const REMOVE_SLIDE = 'REMOVE_SLIDE';
export const SELECT_SLIDE = 'SELECT_SLIDE';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CONTENT = 'UPDATE_CONTENT';

export const addSlide = () => ({ type: ADD_SLIDE });
export const removeSlide = (id) => ({ type: REMOVE_SLIDE, id: id });
export const selectSlide = (id) => ({ type: SELECT_SLIDE, id: id });
export const updateName = (id, name) => ({ type: UPDATE_NAME, id: id, name: name });
export const updateContent = (id, content) => ({ type: UPDATE_CONTENT, id: id, content: content });