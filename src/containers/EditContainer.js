import { connect } from 'react-redux';
import { removeSlide, updateName, updateContent } from '../actions'
import Edit from '../components/Edit';

const mapStateToProps = (state, ownProps) => {
    return {
        slideName: ownProps.slide.name,
        slideContent: ownProps.slide.content
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRemove: () => {
            dispatch(removeSlide(ownProps.slide.id));
        },
        onUpdateName: (name) => {
            dispatch(updateName(ownProps.slide.id, name));
        },
        onUpdateContent: (content) => {
            dispatch(updateContent(ownProps.slide.id, content));
        }
    }
}

const EditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);

export default EditContainer;