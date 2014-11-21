NewsReader::Application.routes.draw do
  namespace :api do
    resources :feeds, only: [:index, :create, :show, :destroy] do
      resources :entries, only: [:index]
    end
    
    resources :entries, only: [:show]
  end
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  root to: "static_pages#index"
end
