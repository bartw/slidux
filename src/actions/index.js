import GitHub from 'github-api';

export const ADD_SLIDE = 'ADD_SLIDE';
export const REMOVE_SLIDE = 'REMOVE_SLIDE';
export const SELECT_SLIDE = 'SELECT_SLIDE';
export const UPDATE_CONTENT = 'UPDATE_CONTENT';
export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_DOWN';
export const OPEN_EXPORT = 'OPEN_EXPORT';
export const CLOSE_EXPORT = 'CLOSE_EXPORT';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const EXPORT_NOTIFY = 'EXPORT_NOTIFY';
export const SWITCH_THEME = 'SWITCH_THEME';
export const START_PRESENTATION = 'START_PRESENTATION';
export const STOP_PRESENTATION = 'STOP_PRESENTATION';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const CLEAR = 'CLEAR';
export const IMPORT_SLIDES_NOTIFY = 'IMPORT_SLIDES_NOTIFY';
export const UPDATE_IMPORT_URL = 'UPDATE_IMPORT_URL';

export const addSlide = () => ({ type: ADD_SLIDE });
export const removeSlide = () => ({ type: REMOVE_SLIDE });
export const selectSlide = (id) => ({ type: SELECT_SLIDE, id: id });
export const updateContent = (content) => ({ type: UPDATE_CONTENT, content: content });
export const moveUp = () => ({ type: MOVE_UP });
export const moveDown = () => ({ type: MOVE_DOWN });
export const openExport = () => ({ type: OPEN_EXPORT });
export const closeExport = () => ({ type: CLOSE_EXPORT });
export const updateUsername = (username) => ({ type: UPDATE_USERNAME, username: username });
export const updatePassword = (password) => ({ type: UPDATE_PASSWORD, password: password });
export const switchTheme = () => ({ type: SWITCH_THEME });
export const startPresentation = () => ({ type: START_PRESENTATION });
export const stopPresentation = () => ({ type: STOP_PRESENTATION });
export const previousSlide = () => ({ type: PREVIOUS_SLIDE });
export const nextSlide = () => ({ type: NEXT_SLIDE });
export const clear = () => ({ type: CLEAR });
export const updateImportUrl = (importUrl) => ({ type: UPDATE_IMPORT_URL, importUrl: importUrl });
const notifyExport = (text) => ({ type: EXPORT_NOTIFY, notification: text });
export const createGist = () => {
    return (dispatch, getState) => {
        const state = getState().export;
        const exportedSlides = getState().slides.map(slide => slide.content).join('\n\n----------\n\n');
        if (!state.username || !state.password) {
            dispatch(notifyExport('please provide username and password'));
            return;
        }
        dispatch(notifyExport('saving gist'));
        const gh = new GitHub({
            username: state.username,
            password: state.password
        });
        let gist = gh.getGist();
        gist.create({
            public: true,
            description: 'My first gist',
            files: {
                "file1.txt": {
                    content: exportedSlides
                }
            }
        }).then(data => {
            dispatch(notifyExport(data.data.files[Object.keys(data.data.files)[0]].raw_url));
            console.log(data);
        }).catch(error => {
            dispatch(notifyExport('error'));
        });
    };
};
const importSlidesNotify = (text) => ({ type: IMPORT_SLIDES_NOTIFY, text: text });
export const importSlides = () => {
    return (dispatch, getState) => {
        const state = getState();
        if (!state.importUrl) {
            dispatch(importSlidesNotify());
            return;
        }
        fetch(state.importUrl, { mode: 'cors' }).then(response => dispatch(importSlidesNotify(response.text()))).catch(() => dispatch(importSlidesNotify()));
    };
};