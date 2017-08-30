Rails.application.routes.draw do
  namespace :api do
    resources :widgets
    resources :users
     get "users",       controller: "users", action: "index"
  end
end
