class FavoritesController < ApplicationController

    def index 
        render json: Favorite.all 
    end

    def create 
        favorite = Favorite.create(favorite_params)
        if favorite
            render json: favorite, status: :created
        else
            render json: {errors: "not created"}, status: :unauthorized
        end
    end

    private 

    def favorite_params
        params.permit(:user_id, :post_id)
    end


end
