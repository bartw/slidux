import Slide from './Slide';

test('given a Slide class when create a new Slide then the default values are set', () => {
    const slide = new Slide();
    expect(slide.id).toBeTruthy();
    expect(slide.name).toBe('new slide');
    expect(slide.content).toBe('# New slide');
});