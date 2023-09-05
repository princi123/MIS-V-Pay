class Api::V1::RegionSummaryTransactionsController < ApplicationController
  def index
    start_date = params[:start_date]
    end_date = params[:end_date]
    asset_class = params[:asset_class]
    select_type = params[:select_type]
    employee_code = params[:employee_code]
    p_zone = params[:p_zone]
    transaction_summary_report_region = RegionSummaryTransactionService.get_transaction_summary_report_region(start_date, end_date, asset_class, select_type, employee_code,p_zone)
    render json: transaction_summary_report_region
  end
end
