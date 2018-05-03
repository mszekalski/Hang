class Api::MembershipsController < ApplicationController
  def new

  end

  def create
    @membership = Membership.new(membership_params)
    @channel = Channel.find(membership_params[:membershipable_id])
    if @membership.save
      render "api/channels/show"
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def index
    @memberships = Membership.all
  end

  def show

  end

  private
    def membership_params
      params.require(:membership).permit(:user_id, :membershipable_id, :membershipable_type)
    end
end
