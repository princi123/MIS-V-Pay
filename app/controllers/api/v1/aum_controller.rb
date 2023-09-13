class Api::V1::AumController < ApplicationController
  def index
    # report_period = params[:report_period]
		aum_details = AumService.get_aum_details
		render json: aum_details    
  end   
end
