class Api::V1::UfcSummaryTransactionsController < ApplicationController
    def index
        start_date = params[:start_date]
        end_date = params[:end_date]
        asset_class = params[:asset_class]
        select_type = params[:select_type]
        employee_code = params[:employee_code]
        p_zone = params[:p_zone]
        region_name = params[:region_name]
        transaction_summary_report_ufc = UfcSummaryTransactionService.get_transaction_summary_report_ufc(start_date, end_date, asset_class, select_type, employee_code,p_zone,region_name)
        render json: transaction_summary_report_ufc
    end
end
