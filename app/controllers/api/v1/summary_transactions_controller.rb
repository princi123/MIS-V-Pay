class Api::V1::SummaryTransactionsController < ApplicationController
  def index
    start_date = params[:start_date]
    end_date = params[:end_date]
    asset_class = params[:asset_class]
    select_type = params[:select_type]
    employee_code = params[:employee_code]
    transaction_summary_report = SummaryTransactionService.get_transaction_summary_report(start_date, end_date, asset_class, select_type, employee_code)
    render json: transaction_summary_report
  end
end
  