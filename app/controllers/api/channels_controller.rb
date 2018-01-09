class Api::ChannelsController < ApplicationController

  def new
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render "api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  def index
    @channels = Channel.all
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def destroy
  end

  private
    def channel_params
      params.require(:channel).permit(:topic)
    end

end
