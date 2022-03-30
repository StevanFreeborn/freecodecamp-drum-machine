import React from 'react';
import DrumPad from './DrumPad';

class PadBank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="pad-bank">
        <p>PadBank</p>
        {
          this.props.sounds
          .map(sound => 
            <DrumPad 
              keyId={sound.key} 
              sound={sound.url}
              updateDisplay={this.props.updateDisplay}
            />
          )
        }
      </div>
    );
  }
}

export default PadBank;