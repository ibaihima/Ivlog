class CommentsController < ApplicationController

    def index 
        render json: Comment.all, status: :ok
    end
    
    def create
        comment = Comment.create(comment_params)
        if comment
            render json: comment, status: :created
        else
            render json: {error: "not created"}, status: :unauthorized
        end
    end

    private

    def comment_params
        params.permit(:comment, :user_id, :post_id)
    end
end
