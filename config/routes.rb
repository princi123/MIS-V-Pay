Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :login_details
      resources :summary_transactions
      resources :scheme_details 
      resources :region_summary_transactions
      resources :ufc_summary_transactions
      resources :rm_summary_transactions
      resources :aum
      resources :aum_regions
      resources :aum_ufc
      resources :aum_dropdown
    end
  end
end
