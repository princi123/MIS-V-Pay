require 'oci8'
class Api::V1::LoginDetailsController < ApplicationController
  # before_action :find_user, except: %i[create index]
  def index       
    user_details = LoginDetailsService.get_user_details(emp_id, current_date,quarter_no)
    render json: user_details
  end

  # def create
  #   auth_token = JsonWebToken.encode(p_emp_id)  
  #   user_details = LoginDetailsService.get_user_details(p_emp_id, auth_token)  
  #   render json: user_details, status: :ok
  # end

  private
  def emp_id
    params[:emp_id]
  end

  def current_date
   params[:current_date]
  end

  def quarter_no
    params[:quarter_no]
  end

end