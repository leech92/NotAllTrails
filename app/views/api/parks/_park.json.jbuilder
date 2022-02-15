json.extract! park, :id, :park_name, :description, :acreage, :contact, :country, :state, :latitude, :longitude
json.trails park.trails.each do |trail|
    json.extract! trail, :id, :park_id, :trail_name, :description, :difficulty, :length, :elevation, :duration, :route, :latitude, :longitude
    json.photoURL url_for(trail.photo)
    json.reviews trail.reviews.each do |review|
        json.extract! review, :id, :trail_id, :user_id, :rating
    end
end