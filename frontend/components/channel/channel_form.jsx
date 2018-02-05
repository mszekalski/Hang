import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ChannelForm extends React.Component {
  constructor(props) {
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
   let newChannel = { topic: '' };
  this.state = newChannel;

 }

 update(field) {
   return e => {
     this.setState({[field]: e.target.value});
   };
 }

 handleSubmit(e) {
   e.preventDefault();
   this.props.createChannel(this.state).then(() => this.props.history.push('/home'));
 }

 hide() {
   document.getElementById("channel-form-container").classList.add('hidden');
 }

  render () {

    return (
      <div id='channel-form-container' className='hidden'>
        <div className='channel-form'>
          <div className='new-channel-title-container'>

            <h1 className='new-channel-title'>Create a channel</h1>
          </div>
          <div className='channel-description-container'>
            <p1 className='new-channel-description'>
              Channels are where your members communicate. They&apos;re best when organized around a topic
              -- #leads, for example.
            </p1>
          </div>
        <form
          onSubmit={this.handleSubmit}
          >


          <input
            className="channel-name-input"
            type='text'
            value={this.state.topic}
            onChange={this.update('topic')}
            placeholder='e.g leads'
            />
          <footer className='channel-form-footer'>


            <button
              className="channel-button"
              type="submit"
              value='text'
              >
              Create Channel
            </button>

              <input
                className="cancel-button"
                type="button"
                value="Cancel"
                onClick={this.hide}
                />




          </footer>
        </form>


      </div>

      </div>
    );
  }

}


export default withRouter(ChannelForm);
