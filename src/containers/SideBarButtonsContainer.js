import { connect } from 'react-redux';
import { addSlide } from '../actions'
import SideBarButtons from '../components/SideBarButtons';

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => {
            dispatch(addSlide());
        }
    }
}

const SideBarButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBarButtons);

export default SideBarButtonsContainer;