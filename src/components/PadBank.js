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
        <DrumPad/>
      </div>
    );
  }
}

export default PadBank;