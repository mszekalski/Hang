class Api::ChatMessagesController < ApplicationController
  def new
  end

  def create
  end

  def destroy
  end

  def index
    @chat_messages = ChatMessage.all
  end

  def show
  end

  private
    def chat_message_params
      params.require(:chat_message).permit(:content, :user_id, :channel_id)
    end
end
