import React from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';


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
              <Get url="https://jsonplaceholder.typicode.com/comments">
                {(error, response, isLoading, makeRequest, axios) => {
                  if(error) {
                    return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                  }
                  else if(isLoading) {
                    return (<div>Loading...</div>)
                  }
                  else if(response !== null && response.data !== null) {
                    const { data } = response;
                    return (
                      <div>
                        {data.map((item, index) => (
                          <div key={Math.random()}>{index}. {item.email}</div>
                        ))}
                      </div>
                    )
                  }
                  return (<div>Default message before request is made.</div>)
                }}
              </Get>
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
