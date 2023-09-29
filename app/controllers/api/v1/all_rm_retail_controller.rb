class Api::V1::AllRmRetailController < ApplicationController
  def index
    start_date = params[:start_date]
    end_date = params[:end_date]
    select_type = params[:select_type]
    rm_report = AllIndiaRmRetailService.get_all_rm_details(start_date, end_date, select_type)
    render json: rm_report    
  end     
end
