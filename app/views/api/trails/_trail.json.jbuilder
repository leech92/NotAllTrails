json.extract! trail, :id, :park_id, :trail_name, :description, :difficulty, :length, :elevation, :duration, :route, :latitude, :longitude
json.photoURL url_for(trail.photo)

json.reviews trail.reviews.each do |review|
    json.extract! review, :id, :trail_id, :user_id, :rating, :date, :body
    json.extract! review.user, :first_name, :last_name
end