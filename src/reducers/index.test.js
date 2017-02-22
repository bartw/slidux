import { ADD_SLIDE, REMOVE_SLIDE, SELECT_SLIDE, UPDATE_CONTENT, MOVE_UP, MOVE_DOWN, OPEN_EXPORT, CLOSE_EXPORT } from '../actions';
import slidux from '.';

test('given an action with unkown type when slidux then the state is returned unchanged', () => {
    const state = { id: Date.now(), presentation: {}, export: {} };
    const action = { type: 'unknown' };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with ADD_SLIDE type when slidux then the new state contains a new slide', () => {
    const state = { slides: [] };
    const action = { type: ADD_SLIDE };
    const newState = slidux(state, action);
    expect(newState.slides.length).toBe(1);
});

test('given an action with REMOVE_SLIDE type and an existing selected id when slidux then the new state has the slide with id removed', () => {
    const idToRemove = 2;
    const state = { slides: [{ id: 1 }, { id: idToRemove }, { id: 3 }], selectedId: idToRemove };
    const action = { type: REMOVE_SLIDE };
    const newState = slidux(state, action);
    expect(newState.slides.length).toBe(2);
    expect(newState.slides.map(slide => slide.id)).not.toContain(idToRemove);
});

test('given an action with REMOVE_SLIDE type and a non existing selected id when slidux then the state is not changed', () => {
    const idToRemove = 123;
    const state = { slides: [{ id: 1 }, { id: 3 }], selectedId: idToRemove };
    const action = { type: REMOVE_SLIDE };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with REMOVE_SLIDE type and no selected id when slidux then the state is not changed', () => {
    const state = { slides: [{ id: 1 }, { id: 3 }] };
    const action = { type: REMOVE_SLIDE };
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

test('given an action with UPDATE_CONTENT type and an existing selected id when slidux then the new state slide has the updated content', () => {
    const idToUpdate = 123;
    const newContent = 'newContent';
    const state = { slides: [{ id: idToUpdate, content: 'oldContent' }], selectedId: idToUpdate };
    const action = { type: UPDATE_CONTENT, content: newContent };
    const newState = slidux(state, action);
    expect(newState.slides[0].id).toBe(idToUpdate);
    expect(newState.slides[0].content).toBe(newContent);
});

test('given an action with UPDATE_CONTENT type and a non existing selected id when slidux then the state is not changed', () => {
    const idToUpdate = 123;
    const newContent = 'newContent';
    const state = { slides: [{ id: 321, content: 'oldContent' }], selectedId: idToUpdate };
    const action = { type: UPDATE_CONTENT, content: newContent };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with UPDATE_CONTENT type and no selected id when slidux then the state is not changed', () => {
    const newContent = 'newContent';
    const state = { slides: [{ id: 321, content: 'oldContent' }] };
    const action = { type: UPDATE_CONTENT, content: newContent };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with MOVE_UP type and an existing selected id when slidux then the new state moves the slide up', () => {
    const idToMove = 123;
    const state = { slides: [{ id: 1 }, { id: 2 }, { id: idToMove }, { id: 4 }], selectedId: idToMove };
    const action = { type: MOVE_UP };
    const newState = slidux(state, action);
    expect(newState.slides[1].id).toBe(idToMove);
});

test('given an action with MOVE_UP type and an existing selected id that is already on the first position when slidux then the state is not changed', () => {
    const idToMove = 123;
    const state = { slides: [{ id: idToMove }, { id: 1 }, { id: 2 }, { id: 4 }], selectedId: idToMove };
    const action = { type: MOVE_UP };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with MOVE_UP type and a non existing selected id when slidux then the state is not changed', () => {
    const idToMove = 123;
    const state = { slides: [{ id: 321 }], selectedId: idToMove };
    const action = { type: MOVE_UP };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with MOVE_UP type and no selected id when slidux then the state is not changed', () => {
    const state = { slides: [{ id: 321 }] };
    const action = { type: MOVE_UP };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with MOVE_DOWN type and an existing selected id when slidux then the new state moves the slide down', () => {
    const idToMove = 123;
    const state = { slides: [{ id: 1 }, { id: idToMove }, { id: 3 }, { id: 4 }], selectedId: idToMove };
    const action = { type: MOVE_DOWN };
    const newState = slidux(state, action);
    expect(newState.slides[2].id).toBe(idToMove);
});

test('given an action with MOVE_DOWN type and an existing selected id that is already on the last position when slidux then the state is not changed', () => {
    const idToMove = 123;
    const state = { slides: [{ id: 1 }, { id: 3 }, { id: 4 }, { id: idToMove }], selectedId: idToMove };
    const action = { type: MOVE_DOWN };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with MOVE_DOWN type and a non existing selected id when slidux then the state is not changed', () => {
    const idToMove = 123;
    const state = { slides: [{ id: 321 }], selectedId: idToMove };
    const action = { type: MOVE_DOWN };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with MOVE_DOWN type and no selected id when slidux then the state is not changed', () => {
    const state = { slides: [{ id: 321 }] };
    const action = { type: MOVE_DOWN };
    const newState = slidux(state, action);
    expect(newState).toEqual(state);
});

test('given an action with OPEN_EXPORT type and one slide when slidux then exported is filled in correctly', () => {
    const expectedExported = 'content';
    const state = { slides: [{ content: expectedExported }] };
    const action = { type: OPEN_EXPORT };
    const newState = slidux(state, action);
    expect(newState.export.exported).toEqual(expectedExported);
});

test('given an action with OPEN_EXPORT type and multiple slides when slidux then exported is filled in correctly', () => {
    const content1 = 'content1';
    const content2 = 'content2';
    const expectedExported = content1 + '\n\n----------\n\n' + content2;
    const state = { slides: [{ content: content1 }, { content: content2 }] };
    const action = { type: OPEN_EXPORT };
    const newState = slidux(state, action);
    expect(newState.export.exported).toEqual(expectedExported);
});

test('given an action with OPEN_EXPORT type and no slides when slidux then exported is filled in correctly', () => {
    const state = { slides: [] };
    const action = { type: OPEN_EXPORT };
    const newState = slidux(state, action);
    expect(newState.export.exported).toEqual('');
});

test('given an action with CLOSE_EXPORT type when slidux then exported is cleared', () => {
    const state = { };
    const action = { type: CLOSE_EXPORT };
    const newState = slidux(state, action);
    expect(newState.export.exported).toEqual('');
});