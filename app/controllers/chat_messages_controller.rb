class ChatMessagesController < ApplicationController
  def new
  end

  def create
  end

  def destroy
  end

  def index
  end

  def show
  end

  private
    def chat_message_params  
      params.require(:chat_message).permit(:content, :user_id)
    end
end
