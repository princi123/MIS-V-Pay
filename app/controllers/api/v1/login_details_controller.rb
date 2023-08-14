require 'oci8'
class Api::V1::LoginDetailsController < ApplicationController
    def index
        user_details = LoginDetailsService.get_user_details
        render json: user_details
    end
end
  