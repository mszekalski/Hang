json.extract! chat_message, :content, :user_id, :id, :channel_id
json.created_at chat_message.created_at.localtime.strftime('%l:%M %p')
json.authorName chat_message.user.username
