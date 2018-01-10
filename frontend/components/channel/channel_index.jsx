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
           <Link to={`/home/${channel.id}`} className='channel-topic'
            onClick={() => this.props.receiveChannel(channel)}
            >
            # { channel.topic }
          </Link>
        </li>
      );
    });
  }

  render () {
    return (
      <div className="sidebar">
        <h1 className="channels-header">Channels</h1>
        <ul>
          {  this.renderChannels() }
        </ul>
      </div>
    );
  }

}

export default withRouter(ChannelIndex);
