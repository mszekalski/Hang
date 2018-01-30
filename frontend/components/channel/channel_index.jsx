import React from 'react';
import { withRouter } from 'react-router';
import { Route, Link, NavLink } from 'react-router-dom';
import Welcome from '../welcome';


class ChannelIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchChannels();

  }



  renderChannels() {
    return this.props.channels.map((channel) => {
      if (channel.id === this.props.match.params.channelId) {

      }
      return (

        <li key={`${channel.id}`} className="channel-item">
            <NavLink
              to={`/home/${channel.id}`} className='channel-topic'
              onClick={() => this.props.receiveChannel(channel)}
              activeClassName="active"
              >
                # { channel.topic }

            </NavLink>
          </li>

      );
    });
  }

  render () {
    return (
      <div className="sidebar">
        <Welcome />
        <h1 className="username-header">{this.props.user.username}</h1>
        <h2 className="channels-header">Channels<div>+</div></h2>
        <ul>
          {  this.renderChannels() }
        </ul>
      </div>
    );
  }

}

export default withRouter(ChannelIndex);
