class Api::V1::SummaryTransactionsController < ApplicationController
    def index
        summary_transaction = SummaryTransactionService.get_transaction_summary_report
        render json: summary_transaction
    end
end
