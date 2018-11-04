import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    //const name = 'Hello minwoo';
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '36px'
    };
    const value = 2;
    return (
      <Fragment>
        <div>
          {//name === 'Hello minwoo' && <div>내다!!</div>

          //주로 return 밖에서 조건을 걸지만 return안에서 한다면 이렇게 하면 된다.
          //fuenction을 선언하고 바로 실행을 해줘야한다
          //(function() {
          (() => {
            if (value === 1) return <div>1이다</div>;
            if (value === 2) return <div>2이다</div>;
            if (value === 3) return <div>3이다</div>;
            return <div>없다</div>;
          })()}
        </div>
        <div className="App">안녕하세요</div>
      </Fragment>
    );
  }
}

export default App;
