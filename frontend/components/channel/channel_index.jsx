import React from 'react';
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

class ChannelIndex extends React.Component {

  componentDidMount() {
    
    this.props.fetchChannels();
  }

  render () {
    return (
      <div>

      </div>
    );
  }

}

export default withRouter(ChannelIndex);
