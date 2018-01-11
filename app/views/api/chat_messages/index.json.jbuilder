
  @chat_messages.each do |chat_message|
    json.set! chat_message.id do
      json.partial! 'chat_message', chat_message: chat_message
    end
  end
