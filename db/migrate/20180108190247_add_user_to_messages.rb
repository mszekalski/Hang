class AddUserToMessages < ActiveRecord::Migration[5.1]
  def change

    add_column :chat_messages, :user_id, :integer

  end
end
