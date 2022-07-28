Rails.application.routes.draw do
  resources :favorites
  resources :comments
  resources :likes
  resources :reviews
  resources :posts, only: [:index, :show, :create]
  resources :users




  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
 
  # get "/posts/users/me", to: "posts#by_user_id"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
