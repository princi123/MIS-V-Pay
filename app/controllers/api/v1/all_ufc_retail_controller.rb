class Api::V1::AllUfcRetailController < ApplicationController
  def index
		start_date = params[:start_date]
    end_date = params[:end_date]
		select_type = params[:select_type]
		ufc_report = AllIndiaUfcRetailService.get_all_ufc_details(start_date, end_date, select_type)
		render json: ufc_report    
  end
end
