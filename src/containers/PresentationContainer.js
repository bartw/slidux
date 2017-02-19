import { connect } from 'react-redux';
import { stopPresentation, previousSlide, nextSlide } from '../actions'
import Presentation from '../components/Presentation';

const mapStateToProps = (state, ownProps) => {
    return {
        slide: state.slides.length > state.currentIndex ? state.slides[state.currentIndex] : null
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStopPresentation: () => {
            dispatch(stopPresentation());
        },
        onPreviousSlide: () => {
            dispatch(previousSlide());
        },
        onNextSlide: () => {
            dispatch(nextSlide());
        }
    }
}

const PresentationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Presentation);

export default PresentationContainer;