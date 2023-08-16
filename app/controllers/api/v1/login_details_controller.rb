require 'oci8'
class Api::V1::LoginDetailsController < ApplicationController
  before_action :authorize_request, except: :create
  before_action :find_user, except: %i[create index]

  def index
    user_details = LoginDetailsService.get_user_details
    render json: user_details
  end

  def create
    emp_id = params[:p_emp_id]
    auth_token = params[:p_auth_token]   
    user_details = LoginDetailsService.get_user_details(emp_id, auth_token)  
    render json: user_details, status: :ok
  end
  

end