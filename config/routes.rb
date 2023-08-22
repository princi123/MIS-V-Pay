Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :login_details
      resources :summary_transactions
      resources :scheme_details 
    end
  end
end
