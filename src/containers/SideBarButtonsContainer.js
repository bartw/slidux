import { connect } from 'react-redux';
import { addSlide, openExport, switchTheme, startPresentation } from '../actions';
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
        },
        onSwitchTheme: () => {
            dispatch(switchTheme());
        },
        onStartPresentation: () => {
            dispatch(startPresentation());
        }
    }
}

const SideBarButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBarButtons);

export default SideBarButtonsContainer;