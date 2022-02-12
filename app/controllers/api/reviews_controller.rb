class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)

        if @review.save
            @trail = Trail.find(params[:review][:trail_id])
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            @trail = Trail.find(params[:review][:trail_id])
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @trail = Trail.find(@review.trail_id)
        @review.destroy
        render :show
    end

    private

    def review_params
        params.require(:review).permit(:trail_id, :user_id, :rating, :date, :body)
    end

end