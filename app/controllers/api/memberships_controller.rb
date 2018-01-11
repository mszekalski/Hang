class Api::MembershipsController < ApplicationController
  def new
    @membership = Membership.new
  end

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render "api/memberships/show"
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
    @membership = Membership.find(params[:id])
  end

  private
    def membership_params
      params.require(:membership).permit(:user_id, :channel_id)
    end
end
