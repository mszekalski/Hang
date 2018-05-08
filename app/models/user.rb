class User < ApplicationRecord

  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  attr_reader :password
  after_initialize :ensure_session_token
  has_many :chat_messages

  has_many :memberships

  has_many :channels, :through => :memberships, :source => :membershipable,
             :source_type => 'Channel'

  has_many :threads, :through => :memberships, :source => :membershipable,
             :source_type => 'Thread'

  has_many :created_channels,
  class_name: Channel,
  foreign_key: :creator_id

  has_many :created_threads,
  class_name: Thread,
  foreign_key: :creator_id





  def self.find_by_credentials(username, password)
    user ||= User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
