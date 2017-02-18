import { connect } from 'react-redux';
import { addSlide, openExport } from '../actions'
import SideBarButtons from '../components/SideBarButtons';

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => {
            dispatch(addSlide());
        },
        onExport: () => {
            dispatch(openExport());
        }
    }
}

const SideBarButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBarButtons);

export default SideBarButtonsContainer;