json.extract! park, :id, :park_name, :description, :acreage, :contact, :country, :state, :latitude, :longitude
json.trails park.trails.each do |trail|
    json.set! "photoURL", url_for(trail.photo)
    json.extract! trail, :id, :park_id, :trail_name, :description, :difficulty, :length, :elevation, :duration, :route, :latitude, :longitude
end