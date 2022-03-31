import React from 'react';
import '../styles/App.scss';
import Display from './Display';
import PadBank from './PadBank';
import { SOUNDS } from '../data/Sounds';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // set default display value to non-breaking space
      // as place holder.
      display: String.fromCharCode(160),
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
      <div className="container-xxl">
        <div className="row">
          <div id="drum-machine" className="col-12">
            <Display
              text={this.state.display}
            />
            <PadBank
              sounds={this.state.sounds}
              updateDisplay={this.displayKey}
            />
            <div className="footer">
              <h5>Code by Stevan</h5>
              <p>Copyright &copy; 2021</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
