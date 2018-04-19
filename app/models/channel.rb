class Channel < ApplicationRecord

  validates :topic, presence: true

  has_many :chat_messages
  has_many :memberships

  belongs_to :creator,
  class: User,
  foreign_key: :creator_id

  has_many :members,
  through: :memberships,
  source: :user




end
