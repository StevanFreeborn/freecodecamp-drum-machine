import React from 'react';
import '../styles/App.css';
import Display from './Display';
import PadBank from './PadBank';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="drum-machine">
        <Display/>
        <PadBank/>
      </div>
    );
  }
}

export default App;
