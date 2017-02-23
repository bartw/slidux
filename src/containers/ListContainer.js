import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = (state) => {
  return {
    slides: state.slides,
    selectedId: state.selectedId
  };
};

const ListContainer = connect(
  mapStateToProps
)(List);

export default ListContainer;