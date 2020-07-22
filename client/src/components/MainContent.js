import React from 'react';

import Comments from './Comments';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="main-content--left">
        Empty
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
              <button className="btn">Pull Data</button>
            </div>
            <div className="action-button__line action-button__remove">
              <input type="number" className="input input--remove-number" />
              <button className="btn">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MainContent;
