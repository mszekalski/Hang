class AddPolymorphismToChatMessages < ActiveRecord::Migration[5.1]
  def change
    add_column :chat_messages, :chatable_id, :integer
    add_column :chat_messages, :chatable_type, :string
  end
end
