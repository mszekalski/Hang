class Api::DirectThreadsController < ApplicationController

  def new
  end

  def create
    @direct_thread = DirectThread.new(direct_thread_params)
    @direct_thread.creator_id = current_user.id
    if @direct_thread.save
      render "api/direct_threads/show"
    else
      render json: @direct_thread.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  def index
    @direct_threads = Thread.all
  end

  def show
    @direct_thread = Thread.find(params[:id])

  end

  def destroy

  end

  private
    def direct_thread_params
      params.require(:direct_thread).permit(:creator_id)
    end



end
