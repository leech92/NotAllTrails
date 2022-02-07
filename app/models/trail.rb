class Trail < ApplicationRecord
    validates :trail_name, :description, :difficulty, :length, :elevation, :duration, :route, :latitude, :longitude, presence: true

    belongs_to :park

    has_one_attached :photo
end
