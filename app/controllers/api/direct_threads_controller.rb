class Api::DirectThreadsController < ApplicationController

  def new
  end

  def create
    @direct_thread = DirectThread.new(direct_thread_params)

  
    if @direct_thread.save

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


  def direct_thread_params
    params.require(:direct_thread).permit(:creator_id, membership_attributes: [:user_id, :membershipable_id, :membershipable_type])
  end







end
