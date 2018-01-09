import React from 'react';
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';


class ChannelIndex extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
  }

  renderChannels() {
    return this.props.channels.map((channel) => {
      return (
        <li key={`${channel.id}`} className="channel-item">
          <span className='channelt-topic'>{ channel.topic }</span>
        </li>
      );
    });
  }

  render () {
    return (
      <div className="sidebar">
        <ul>
          {  this.renderChannels() }
        </ul>
      </div>
    );
  }

}

export default withRouter(ChannelIndex);
