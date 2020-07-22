import React from 'react';
import { connect } from 'react-redux';

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((item, index) => (
        <div key={Math.random()}>{index}. {item.email}</div>
      ))}
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  comments: state.comments.data,
});

export default connect(mapStateToProps)(Comments);
