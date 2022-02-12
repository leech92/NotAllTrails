json.extract! @trail, :id, :park_id, :trail_name, :description, :difficulty, :length, :elevation, :duration, :route, :latitude, :longitude
json.photoURL url_for(@trail.photo)

json.reviews trail.reviews.each do |review|
    json.extract! review, :trail_id, :user_id, :rating, :date, :body
end