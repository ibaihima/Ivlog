class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :comment 

      t.belongs_to :user
      t.belongs_to :post 
      t.timestamps
    end
  end
end
