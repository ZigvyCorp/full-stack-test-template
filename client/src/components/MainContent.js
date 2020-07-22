import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Comments from './Comments';

const MainContent = ({ isFetching }) => {
  const inputRef = React.createRef();
  const dispatch = useDispatch();
  const onPullData = () => {
    dispatch({
      type: 'COMMENTS_FETCH_REQUESTED'
    });
  };

  const onRemove = () => {
    const index = inputRef.current.value;
    // console.log('index: ', index);
    dispatch({
      type: 'COMMENTS_REMOVE_REQUESTED',
      index,
    });
  };

  return (
    <div className="main-content">
      <div className="main-content--left">
      </div>
      <div className="main-content--right">
        <div className="content-right">
          <div className="content-right__svg-image">
            <img src={`${process.env.PUBLIC_URL}/dev-test-img.svg`} alt="" />
          </div>
          <div className="content-right__data-list">
            <div className="box-shadow">
              <Comments />
            </div>
          </div>
          <div className="action-button content-right__action-buttons">
            <div className="action-button__line action-button__pull-data">
              <button
                className="btn btn--pull-data"
                onClick={onPullData}
              >
                {isFetching ?
                  <FontAwesomeIcon icon={faSpinner} spin />
                  : `Pull Data`
                }

              </button>
            </div>
            <div className="action-button__line action-button__remove">
              <input type="number" ref={inputRef} className="input input--remove-number" />
              <button
                className="btn"
                onClick={onRemove}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.comments.isFetching,
});

export default connect(mapStateToProps)(MainContent);
