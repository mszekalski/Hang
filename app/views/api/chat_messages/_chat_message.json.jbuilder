json.extract! chat_message, :content, :user_id, :id
json.created_at chat_message.created_at.localtime.strftime('%l:%M')
