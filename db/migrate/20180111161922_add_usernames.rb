class AddUsernames < ActiveRecord::Migration[5.1]
  def change
    add_column :chat_messages, :username, :string
  end
end
