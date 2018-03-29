class Api::MembershipsController < ApplicationController
  def new

  end

  def create

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
      params.require(:membership).permit(:user_id, :channel_id)
    end
end
