class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :like
      t.string :comment 
      t.belongs_to :user
      t.belongs_to :post 

      t.timestamps
    end
  end
end
