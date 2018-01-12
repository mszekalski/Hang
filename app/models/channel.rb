class Channel < ApplicationRecord
  has_many :chat_messages
  has_many :memberships

  has_many :members,
  through: :memberships,
  source: :user




end
