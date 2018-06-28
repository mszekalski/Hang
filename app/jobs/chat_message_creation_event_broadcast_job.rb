class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(chat_message)
    ActionCable
      .server
      .broadcast('chat_channel',
         id: chat_message.id,
         created_at: chat_message.created_at,
         content: chat_message.content,
         user_id: chat_message.user_id,
         chatable_id: chat_message.chatable_id,
         chatable_type: chat_message.chatable_type,
         authorName: chat_message.user.username)
    end


end
