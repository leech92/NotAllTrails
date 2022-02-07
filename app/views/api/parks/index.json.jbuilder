@parks.each do |park|
    json.set! park.id do
        json.partial! 'api/parks/park', park: park
    end
end