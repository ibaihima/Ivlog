class Post < ApplicationRecord
    belongs_to :user
    has_many :likes, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :favorites 


    validates :content, presence: true

end
