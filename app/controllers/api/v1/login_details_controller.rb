require 'oci8'
class Api::V1::LoginDetailsController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]
  before_action :set_user_details, only: [:show, :destroy]

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