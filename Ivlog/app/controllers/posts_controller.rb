class PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def show 
        post = Post.find_by(id: params[:id])
        render json: post, status: :ok
    end

    def create
        post = Post.create(post_params)
        if post 
            render json: post, status: :created
        else
            render json: {errors: "not created"}, status: :unauthorized
        end
    end 

    # def by_user_id
    #     user_posts = User.find(session[:user_id]).posts
    #     render json: user_posts
    # end 

    private

    def post_params 
        params.permit(:user_id, :feed, :content)
    end

end
