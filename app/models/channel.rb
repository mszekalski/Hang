class Channel < ApplicationRecord

  validates :topic, presence: true


  has_many :memberships

  belongs_to :creator,
  class_name: User,
  foreign_key: :creator_id

  has_many :members,
  through: :memberships,
  source: :user

  has_many :chat_messages, :as => :chatable




end
