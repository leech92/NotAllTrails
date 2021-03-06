Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :parks, only: [:show, :index]
    resources :trails, only: [:show, :index]
    resources :reviews, only: [:create, :update, :destroy]
  end

  root "static_pages#root"
end
