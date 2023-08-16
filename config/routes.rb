Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :login_details
      get '/*a', to: 'application#not_found'
      resources :summary_transactions 
    end
  end
end
