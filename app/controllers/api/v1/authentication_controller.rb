class Api::V1::AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  def login
    user_details = LoginDetailsService.get_user_details(params[:p_emp_id], params[:p_auth_token])
    
    if user_details&.authenticate(params[:password])
      token = JsonWebToken.encode(params[:p_emp_id])
      time = Time.now + 24.hours.to_i
      render json: {
        token: token,
        exp: time.strftime("%m-%d-%Y %H:%M"),
        user_details: user_details
      }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end
end
