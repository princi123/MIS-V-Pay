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
      resources :manage_user_channel_code_dropdown
      resources :manage_user_reporting_role_dropdown
      resources :manage_user_power_user_dropdown
      resources :manage_user_functional_role_dropdown
      resources :manage_user_city_dropdown
      resources :manage_user_select_quarter_dropdown
    end
  end
end
