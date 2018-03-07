# README

Hang is a productivity collaboration chat tool designed to allow individuals discuss work together.

Users become members of channels, allowing only the specified individuals to interact together.

https://aa-hang.herokuapp.com/#/

The core of Hang is built using Ruby on Rails with a React front end. The technology that powers the real time collaberation features of Hang is called "Action Cable" which allows for the creation of websockets so that messages can be sent and received instantaneously.

Delve deep into ~2 features that show off your technical abilities. Discuss both the challenges faced and your brilliant solutions.

-Live Chat
  As stated, live chat is run using Action Cable. Included starting with Rails 5.0 it allows for the creation of web sockets, which allow for live, two way, data exchange between users. This helps provide the core feature of slack which is live message exchange. Action Cable allowed me to create and broadcast messages to all users subscribed to the channel. Theo code below highlights exactly what happens when a user connects to Hang and when a message is received by Action Cable so that it is broadcasted to all the subscribed users.
  
 ```
 createSocket() {
    let cable = Cable.createConsumer();
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel'
    }, {
      connected: () => {},
      received: (data) => {
        return this.props.receiveMessage(data);
      },
      create: function(chatContent) {
        this.perform('create', {
          content: chatContent.message,
          user_id: chatContent.user_id,
          channel_id: chatContent.channel_id,
          username: chatContent.username
        });

      }
    });
  }
  ```
  Action Cable also required the creation of 'channel' and 'job' back end files. This is where Action Cable handles things on the back end to push messages. 
  
  ```
   class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(chat_message)
    ActionCable
      .server
      .broadcast('chat_channel',
         id: chat_message.id,
         created_at: chat_message.created_at.localtime.strftime('%l:%M %p'),
         content: chat_message.content,
         user_id: chat_message.user_id,
         channel_id: chat_message.channel_id,
         authorName: chat_message.user.username)
    end


end

   class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_channel'
  end

  def unsubscribed
  end

  def create(opts)
    ChatMessage.create(
      content: opts.fetch('content'),
      user_id: opts.fetch('user_id'),
      channel_id: opts.fetch('channel_id'),
      username: opts.fetch('username')
    )
  end
end
      
   ```
  
Code snippets to highlight your best code (markdown code snippets, NOT screenshots)

