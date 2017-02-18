import { connect } from 'react-redux';
import { removeSlide, moveUp, moveDown, updateName, updateContent } from '../actions'
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
            dispatch(removeSlide());
        },
        onMoveUp: () => {
            dispatch(moveUp());
        },
        onMoveDown: () => {
            dispatch(moveDown());
        },
        onUpdateName: (name) => {
            dispatch(updateName(name));
        },
        onUpdateContent: (content) => {
            dispatch(updateContent(content));
        }
    }
}

const EditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);

export default EditContainer;