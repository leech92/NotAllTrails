class Review < ApplicationRecord
    validates :trail_id, :user_id, :rating, :date, presence: true

    belongs_to :user
    belongs_to :trail
end
