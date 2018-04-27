class ChatMessage < ApplicationRecord
  belongs_to :user
  validates :content, presence: true




  after_create_commit do
    ChatMessageCreationEventBroadcastJob.perform_later(self)
  end
end
