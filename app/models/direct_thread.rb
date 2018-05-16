class DirectThread < ApplicationRecord

  belongs_to :creator,
  class_name: User,
  foreign_key: :creator_id

  has_many :memberships, :as => :membershipable
  has_many :members, :through => :memberships, :source => :user

  has_many :chat_messages, :as => :chatable

  accepts_nested_attributes_for :memberships
end
