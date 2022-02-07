class CreateParks < ActiveRecord::Migration[6.1]
  def change
    create_table :parks do |t|
      t.string :park_name, null: false
      t.text :description, null: false
      t.integer :acreage, null: false
      t.string :contact, null: false
      t.string :country, null: false
      t.string :state, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.timestamps
    end
  end
end
