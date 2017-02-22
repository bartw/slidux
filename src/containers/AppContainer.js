import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        isDark: state.isDark,
        showPresentation: state.presentation.show
    };
};

const AppContainer = connect(
    mapStateToProps
)(App);

export default AppContainer;