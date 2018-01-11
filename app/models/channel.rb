class Channel < ApplicationRecord
  has_many :chat_messages

  has_many :users,
  through: :memberships

end
