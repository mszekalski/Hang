class Channel < ApplicationRecord

  validates :topic, presence: true
  has_many :chat_messages
  has_many :memberships

  has_many :members,
  through: :memberships,
  source: :user




end
