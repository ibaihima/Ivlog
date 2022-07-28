class CommentSerializer < ActiveModel::Serializer
  attributes :comment, :id
  
  belongs_to :user
  belongs_to :post
end
 