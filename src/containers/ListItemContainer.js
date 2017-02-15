import { connect } from 'react-redux';
import { selectSlide } from '../actions'
import ListItem from '../components/ListItem';

const mapStateToProps = (state, ownProps) => {
    return {
        slide: ownProps.slide
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(selectSlide(ownProps.slide.id));
        }
    }
}

const ListItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);

export default ListItemContainer;