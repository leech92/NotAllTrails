class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :trail_id, null: false
      t.integer :user_id, null: false
      t.integer :rating, null: false
      t.date :date, null: false
      t.text :body
      t.timestamps
    end

    add_index :reviews, :trail_id
    add_index :reviews, :user_id
  end
end
