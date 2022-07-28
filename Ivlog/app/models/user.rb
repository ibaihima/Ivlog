class User < ApplicationRecord
    has_many :posts
    has_many :favorites
    has_many :comments, through: :posts
    has_secure_password
    
end
