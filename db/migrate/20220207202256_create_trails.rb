class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.integer :park_id, null: false
      t.string :trail_name, null: false
      t.text :description, null: false
      t.string :difficulty, null: false
      t.float :length, null: false
      t.integer :elevation, null: false
      t.string :duration, null: false
      t.string :route, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.timestamps
    end

    add_index :trails, :park_id
  end
end
