class ApplicationController < ActionController::API
    include JsonWebToken

  before_action :authenticate_request

  private

  def authenticate_request
    header = request.headers["Authorization"]
    header = header.split(" ").last if header
    decoded = jwt_decode(header)
    @current_user_details = LoginDetailsService.get_user_details(decoded[:emp_id])
  rescue JWT::DecodeError
    render json: { error: "Unauthorized" }, status: :unauthorized
  end
end
