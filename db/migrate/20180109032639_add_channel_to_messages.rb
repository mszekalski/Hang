class AddChannelToMessages < ActiveRecord::Migration[5.1]
  def change

    add_column :chat_messages, :channel_id, :integer
  end
end
