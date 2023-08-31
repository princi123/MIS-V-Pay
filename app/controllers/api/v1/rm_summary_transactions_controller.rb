class Api::V1::RmSummaryTransactionsController < ApplicationController
  def index
    start_date = params[:start_date]
    end_date = params[:end_date]
    asset_class = params[:asset_class]
    select_type = params[:select_type]
    employee_code = params[:employee_code]
    p_zone = params[:p_zone]
    region_name = params[:region_name]
    ufc_code = params[:ufc_code]
    transaction_summary_report_rm = RmSummaryTransactionService.get_transaction_summary_report_rm(start_date, end_date, asset_class, select_type, employee_code,p_zone,region_name, ufc_code)
    render json: transaction_summary_report_rm
  end
end
