class Api::V1::AuthenticationController < ApplicationController
    skip_before_action :authenticate_request

  def login
    user_details = LoginDetailsService.get_user_details(params[:p_emp_id])
    if user_details&.authenticate(params[:p_emp_id])
      token = jwt_encode(p_emp_id: user_details.id)
      render json: { token: token }, status: :ok
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end
end
