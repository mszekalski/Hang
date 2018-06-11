class RemoveUsernameFromChats < ActiveRecord::Migration[5.1]
  def change
    remove_column :chat_messages, :username
  end
end
