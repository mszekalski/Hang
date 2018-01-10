class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(chat_message)
    ActionCable
      .server
      .broadcast('chat_channel',
         id: chat_message.id,
         created_at: chat_message.created_at.localtime.strftime('%l:%M'),
         content: chat_message.content,
         user_id: chat_message.user_id,
         channel_id: chat_message.channel_id)
    end

    
end
