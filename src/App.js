import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sample: ''
    };
  }
  render(){
    return (
      <div className="container-fluid">
        <h2 className='text-center'>Drum Machine</h2>
        <div id='drum-machine' className='text-center'>
          <div id='display'>
          </div>
          <button id='' className='drum-pad'>Q</button>
          <button id='' className='drum-pad'>W</button>
          <button id='' className='drum-pad'>E</button>
          <br />
          <button id='' className='drum-pad'>A</button>
          <button id='' className='drum-pad'>S</button>
          <button id='' className='drum-pad'>D</button>
          <br />
          <button id='' className='drum-pad'>Z</button>
          <button id='' className='drum-pad'>X</button>
          <button id='' className='drum-pad'>C</button>
        </div>
      </div>
    );
  }
}

export default App;
