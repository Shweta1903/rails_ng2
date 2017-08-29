Rails.application.routes.draw do
  namespace :api do
    resources :widgets
    get "ng2-app",       controller: "ng2_app", action: "index"
    get "ng2-app/*path", controller: "ng2_app", action: "index"    
  end
end
