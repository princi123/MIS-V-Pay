class Api::V1::SummaryTransactionsController < ApplicationController
    def index
        transaction_summary_report = SummaryTransactionService.get_transaction_summary_report
        render json: transaction_summary_report
    end
end
