json.extract! @trail, :id, :park_id, :trail_name, :description, :difficulty, :length, :elevation, :duration, :route, :latitude, :longitude
json.photoURL url_for(@trail.photo)