import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="display">
        {this.props.text}
      </div>
    );
  }
}

export default Display;