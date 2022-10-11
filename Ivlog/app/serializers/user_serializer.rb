class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :username
  has_many :posts, :dependent => :destroy
  has_many :favorites, :dependent => :destroy
end
