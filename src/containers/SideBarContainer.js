import { connect } from 'react-redux';
import SideBar from '../components/SideBar';

const mapStateToProps = (state, ownProps) => {
    return {
        isDark: state.isDark
    };
};

const SideBarContainer = connect(
    mapStateToProps
)(SideBar);

export default SideBarContainer;