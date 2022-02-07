class Api::TrailsController < ApplicationController
    def show
        @trail = Trail.includes(photo_attachment: :blob).find_by(id: params[:id])
        render :show
    end

    def index
        @trails = Trail.all.includes(photo_attachment: :blob)
        render :index
    end
end