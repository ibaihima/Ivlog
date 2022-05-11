class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create 
        user = User.create(user_params)
        if user
            render json: user, status: :created
        else 
            render json: {error: "not created"}, status: :unprocessable_entity
        end 
    end 

    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :password, :firstName, :lastName)
    end
end
