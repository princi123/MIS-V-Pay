class Api::V1::AllRegionRetailController < ApplicationController
  def index
		start_date = params[:start_date]
    end_date = params[:end_date]
		select_type = params[:select_type]
		region_report = AllIndiaRegionRetailService.get_all_region_details(start_date, end_date, select_type)
		render json: region_report
  end
end
