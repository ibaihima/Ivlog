class LikeSerializer < ActiveModel::Serializer
  attributes :like, :id
  belongs_to :post
end
