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
        <h1>Create a New Channel</h1>
        <form
          onSubmit={this.handleSubmit}
          >

          <input
            type='text'
            value={this.state.topic}
            onChange={this.update('topic')}
            />
          <button
            type="submit"
            value='text'
            >
            Create Channel
          </button>
          <button onClick={this.hidden}>X</button>
        </form>



      </div>
    );
  }

}


export default withRouter(ChannelForm);
