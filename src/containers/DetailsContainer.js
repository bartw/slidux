import { connect } from 'react-redux';
import Details from '../components/Details';

const mapStateToProps = (state) => {
    return {
        slide: state.slides.find(slide => slide.id === state.selectedId)
    };
};

const DetailsContainer = connect(
    mapStateToProps
)(Details);

export default DetailsContainer;