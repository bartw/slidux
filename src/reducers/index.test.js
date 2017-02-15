import { ADD_SLIDE, REMOVE_SLIDE, SELECT_SLIDE, UPDATE_NAME, UPDATE_CONTENT } from '../actions';
import slidux from '.';

test('given an action with unkown type when slidux then the state is returned unchanged', () => {
    const state = { id: Date.now() };
    const action = { type: 'unknown' };
    const newState = slidux(state, action);
    expect(newState).toBe(state);
});

test('given an action with ADD_SLIDE type when slidux then the new state contains a new slide', () => {
    const state = { slides: [] };
    const action = { type: ADD_SLIDE };
    const newState = slidux(state, action);
    expect(newState.slides.length).toBe(1);
});

test('given an action with REMOVE_SLIDE type and an existing id when slidux then the new state has the slide with id removed', () => {
    const idToRemove = 2;
    const state = { slides: [{ id: 1 }, { id: idToRemove }, { id: 3 }] };
    const action = { type: REMOVE_SLIDE, id: idToRemove };
    const newState = slidux(state, action);
    expect(newState.slides.length).toBe(2);
    expect(newState.slides.map(slide => slide.id)).not.toContain(idToRemove);
});

test('given an action with REMOVE_SLIDE type and a non existing id when slidux then the state is not changed', () => {
    const idToRemove = 123;
    const state = { slides: [{ id: 1 }, { id: 3 }] };
    const action = { type: REMOVE_SLIDE, id: idToRemove };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with SELECT_SLIDE type and an id when slidux then the new state selectedId is the id', () => {
    const idToSelect = 123;
    const state = {};
    const action = { type: SELECT_SLIDE, id: idToSelect };
    const newState = slidux(state, action);
    expect(newState.selectedId).toBe(idToSelect);
});

test('given an action with UPDATE_NAME type and an existing id when slidux then the new state slide has the updated name', () => {
    const idToUpdate = 123;
    const newName = 'newName';
    const state = { slides: [ { id: idToUpdate, name: 'oldName' } ]};
    const action = { type: UPDATE_NAME, id: idToUpdate, name: newName };
    const newState = slidux(state, action);
    expect(newState.slides[0].id).toBe(idToUpdate);
    expect(newState.slides[0].name).toBe(newName);
});

test('given an action with UPDATE_NAME type and a non existing id when slidux then the state is not changed', () => {
    const idToUpdate = 123;
    const newName = 'newName';
    const state = { slides: [ { id: 321, name: 'oldName' } ]};
    const action = { type: UPDATE_NAME, id: idToUpdate, name: newName };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with UPDATE_CONTENT type and an existing id when slidux then the new state slide has the updated content', () => {
    const idToUpdate = 123;
    const newContent = 'newContent';
    const state = { slides: [ { id: idToUpdate, content: 'oldContent' } ]};
    const action = { type: UPDATE_CONTENT, id: idToUpdate, content: newContent };
    const newState = slidux(state, action);
    expect(newState.slides[0].id).toBe(idToUpdate);
    expect(newState.slides[0].content).toBe(newContent);
});

test('given an action with UPDATE_CONTENT type and a non existing id when slidux then the state is not changed', () => {
    const idToUpdate = 123;
    const newContent = 'newContent';
    const state = { slides: [ { id: 321, content: 'oldContent' } ]};
    const action = { type: UPDATE_CONTENT, id: idToUpdate, content: newContent };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});