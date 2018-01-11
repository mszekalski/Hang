import React from 'react';
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';
import Welcome from '../welcome';


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
        <Welcome />
        <h1 className="username">{this.props.user.username}</h1>
        <h2 className="channels-header">Channels</h2>
        <ul>
          {  this.renderChannels() }
        </ul>
      </div>
    );
  }

}

export default withRouter(ChannelIndex);
