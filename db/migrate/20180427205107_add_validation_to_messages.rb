class AddValidationToMessages < ActiveRecord::Migration[5.1]
  def change
    change_column_null :chat_messages, :content, false
  end
end
