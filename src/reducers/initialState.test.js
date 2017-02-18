import initialState from './initialState';

test('given an initialSate then it has 1 slide with default values and that slide is selected', () => {

    expect(initialState.slides.length).toBe(1);
    expect(initialState.slides[0].content).toBe('# New slide');
    expect(initialState.selectedId).toBe(initialState.slides[0].id);
});