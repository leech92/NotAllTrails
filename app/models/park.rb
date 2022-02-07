class Park < ApplicationRecord
    validates :park_name, :description, :acreage, :contact, :country, :state, :latitude, :longitude, presence: true

    has_many :trails
end
