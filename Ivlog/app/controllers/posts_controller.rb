class PostsController < ApplicationController

    def create
        post = Post.create(post_params)
        if post 
            render json: post, status: :created
        else
            render json: {errors: "not created"}, status: :unauthorized
        end
    end 

    private

    def post_params 
        params.permit(:feed, :content)
    end

end
