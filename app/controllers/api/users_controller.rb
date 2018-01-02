class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  def index
  end

  def show
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
