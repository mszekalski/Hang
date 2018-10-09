class Api::DirectThreadsController < ApplicationController

  def new
  end

  def create
    @direct_thread = DirectThread.new(direct_thread_params)
    @direct_thread.creator_id = current_user.id
    @members = member_params
  debugger

    if @direct_thread.save
      Membership.create(user_id: current_user.id, membershipable_id: @direct_thread.id, membershipable_type: "DirectThread")
      
      render :show
    else
      render json: @direct_thread.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  def index
    @direct_threads = DirectThread.all
  end

  def show
    @direct_thread = DirectThread.find(params[:id])

  end

  def destroy

  end

  private

  def member_params
    params.require(:members)
  end

  def direct_thread_params
    params.require(:direct_thread).permit(:creator_id)
  end

  def membership_params
    params.require(:membership).permit(:user_id, :membershipable_id, :membershipable_type)
  end



end
