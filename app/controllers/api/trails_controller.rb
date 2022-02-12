class Api::TrailsController < ApplicationController
    def show
        @trail = Trail.includes(photo_attachment: :blob).find_by(id: params[:id])
        render :show
    end
end