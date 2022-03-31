import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "inactive"
    };
    this.playSound = this.playSound.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }

  keyPress(e) {
    if(e.key.toLowerCase() !== this.props.keyId.toLowerCase()) return;
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
    this.activatePad();
    setTimeout(() => this.activatePad(), 250);
    this.props.updateDisplay(this.props.keyId);
  }

  activatePad() {
    if(this.state.status === "inactive")
    {
      return this.setState({status: "active"});
    }
    return this.setState({status: "inactive"});
  }

  render() {
    return (
        <div 
          id={this.props.id}
          className={`drum-pad ${this.state.status}`}
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