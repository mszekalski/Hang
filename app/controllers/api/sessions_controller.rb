class Api::SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
    else


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
    sign_out

  end


end
