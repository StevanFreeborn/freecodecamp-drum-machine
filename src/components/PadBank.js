import React from 'react';
import DrumPad from './DrumPad';

class PadBank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="pad-bank">
        {
          this.props.sounds
          .map(sound => 
            <DrumPad 
              id={sound.id}
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