class Api::V1::AumUfcController < ApplicationController
  def index
		aum_ufc_details = AumUfcService.get_aum_ufc_details
		render json: aum_ufc_details    
  end   
end
