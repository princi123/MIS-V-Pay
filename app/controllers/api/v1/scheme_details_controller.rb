class Api::V1::SchemeDetailsController < ApplicationController
    def index
        scheme_detail = SchemeService.get_scheme_details
        render json: scheme_detail
    end
end
