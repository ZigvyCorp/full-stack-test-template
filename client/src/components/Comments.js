import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Comments = ({ comments, isFetching }) => {
  return (
    <div>
      { isFetching ? <FontAwesomeIcon icon={faSpinner} spin /> :
        comments.map((item, index) => (
        <div key={Math.random()}>{index}. {item.email}</div>
      ))}
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  comments: state.comments.data,
  isFetching: state.comments.isFetching,
});

export default connect(mapStateToProps)(Comments);
