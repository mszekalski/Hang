class RemoveChannelId < ActiveRecord::Migration[5.1]
  def change
    remove_column :chat_messages, :channel_id
  end
end
