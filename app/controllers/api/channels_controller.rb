class Api::ChannelsController < ApplicationController

  def new
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.creator_id = current_user.id
    if @channel.save
      Membership.create(user_id: current_user.id, membershipable_id: @channel.id, membershipable_type: "Channel")
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
      params.require(:channel).permit(:topic, :purpose, :private, :creator_id)
    end

    def membership_params
      params.require(:membership).permit(:user_id, :membershipable_id, :membershipable_type)
    end
  

end
