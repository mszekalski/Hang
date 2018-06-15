json.extract! chat_message, :content, :user_id, :id, :chatable_id, :chatable_type
json.created_at chat_message.created_at
json.authorName chat_message.user.username
