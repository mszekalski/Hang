class Api::ChatMessagesController < ApplicationController
  def new
  end

  def create
    if @chat_message.save
      render "api/chat_messages/show"
    else
      render json: @chat_messages.errors.full_messages, status: 422
    end
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
