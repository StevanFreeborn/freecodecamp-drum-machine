import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(e) {
    
    if(e.key.toLowerCase() === this.props.keyId.toLowerCase())
      this.playSound();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keyPress)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress)
  }

  playSound() {
    const sound = document.getElementById(this.props.keyId);
    sound.play();
    this.props.updateDisplay(this.props.keyId);
  }

  render() {
    return (
        <div 
          id={this.props.id}
          className="drum-pad"
          onClick={this.playSound}
        >
            <audio 
              className="clip"
              id={this.props.keyId}
              src={this.props.sound}
            />
            {this.props.keyId}
        </div>
    );
  }
}

export default DrumPad;