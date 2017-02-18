import { connect } from 'react-redux';
import { closeExport } from '../actions'
import Export from '../components/Export';

const mapStateToProps = (state, ownProps) => {
    return {
        exported: state.exported
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
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