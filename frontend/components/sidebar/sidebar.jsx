import React from 'react';
import { withRouter } from 'react-router';
import { Route, Link, NavLink } from 'react-router-dom';
import WelcomeContainer from '../dropdown/welcome_container';


class Sidebar extends React.Component {

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

  renderChannelForm() {
    document.getElementById("channel-form-container").classList.remove('hidden');
    document.getElementById("channel-form-container").classList.add('display-form');
  }

  render () {
    return (
      <div className="sidebar">
        <WelcomeContainer />

        <h2 className="channels-header" onClick={this.renderChannelForm}>Channels<div className='plus-button'>+</div></h2>
        <ul>
          {  this.renderChannels() }
        </ul>
      </div>
    );
  }

}

export default withRouter(Sidebar);
