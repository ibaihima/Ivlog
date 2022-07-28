class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def index
        render json: User.all
    end

    # def show 
    #     user = User.find_by(id: params[:id])
    #     render json: user
    # end

    # def show
    #     user_id = session[:user_id]
    #     if user_id
    #         user = User.find(user_id)
    #         render json: user, status: :created
    #     else
    #         render json: { error: "Unauthorized" }, status: :unauthorized
    #     end
    # end

    # def create 
    #     user = User.create(user_params)
    #     if user
    #         render json: user, status: :created
    #     else 
    #         render json: {error: "not created"}, status: :unprocessable_entity
    #     end 
    # end 

        def create
            user = User.create!(user_params)
            session[:user_id] ||= user.id
            render json: user, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
        end
        
        # def favorites
        #     user = User.find_by(id: params[:user_id])
        #     # favorite = user.favorites
        #     render json: user, status: :ok
        # end

        
        



    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :password, :firstName, :lastName)
    end

    def favorite_params
        params.permit(:user_id, :feed, :content)
    end
end
