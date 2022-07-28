class PostSerializer < ActiveModel::Serializer
  attributes :id, :feed, :content
  belongs_to :user
  has_many :likes  
  has_many :comments
  # has_one :user
end
