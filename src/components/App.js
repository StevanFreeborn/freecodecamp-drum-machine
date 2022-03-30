import React from 'react';
import '../styles/App.css';
import Display from './Display';
import PadBank from './PadBank';
import { SOUNDS } from '../data/Sounds';
import { keyboard, keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      sounds: SOUNDS
    };
    this.displayKey = this.displayKey.bind(this);
  }

  displayKey(keyId) {
    this.setState({
      display: keyId
    })
  }

  render() {
    return (
      <div id="drum-machine">
        <Display
          text={this.state.display}
        />
        <PadBank
          sounds={this.state.sounds}
          updateDisplay={this.displayKey}
        />
      </div>
    );
  }
}

export default App;
