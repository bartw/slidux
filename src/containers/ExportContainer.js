import { connect } from 'react-redux';
import { updateUsername, updatePassword, createGist, closeExport } from '../actions'
import Export from '../components/Export';

const mapStateToProps = (state, ownProps) => {
    return {
        exported: state.exported,
        username: state.username,
        password: state.password,
        gistUrl: state.gistUrl
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateUsername: (username) => {
            dispatch(updateUsername(username));
        },
        onUpdatePassword: (password) => {
            dispatch(updatePassword(password));
        },
        onCreateGist: () => {
            dispatch(createGist());
        },
        onClose: () => {
            dispatch(closeExport());
        }
    }
}

const ExportContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Export);

export default ExportContainer;