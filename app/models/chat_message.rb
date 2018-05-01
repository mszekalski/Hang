class ChatMessage < ApplicationRecord
  belongs_to :user
  validates :content, presence: true
  belongs_to :channel




  after_create_commit do
    ChatMessageCreationEventBroadcastJob.perform_later(self)
  end
end
