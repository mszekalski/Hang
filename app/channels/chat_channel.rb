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
      chatable_id: opts.fetch('chatable_id'),
      chatable_type: opts.fetch('chatable_type')
    )
  end
end
