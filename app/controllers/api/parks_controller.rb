class Api::ParksController < ApplicationController
    def show
        @park = Park.find_by(id: params[:id])
        render :show
    end

    def index
        @parks = Park.all
        render :index
    end
end