require 'oci8'
class SummaryTransactionService
  def self.get_transaction_summary_report
    conn = OCI8.new('MISVPAY', 'MISVPAY@123', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=103.12.1.155)(PORT=1521))(CONNECT_DATA=(SID=xe)))')
    sql = 'BEGIN sp_misvapay_get_transaction_summary_report(:p_startDate, :p_endDate, :p_assetClass, :p_selectType, :p_employeeCode, :get_all_data); END;'
    
    cursor = conn.parse(sql)
    
    cursor.bind_param(':p_startDate', '01/04/2023', String) 
    cursor.bind_param(':p_endDate', '30/09/2023', String)
    cursor.bind_param(':p_assetClass', 1, Integer)
    cursor.bind_param(':p_selectType', 1, Integer)
    cursor.bind_param(':p_employeeCode', '2941', String)
    cursor.bind_param(':get_all_data', nil, OCI8::Cursor) 
    
    cursor.exec
    
    summary_report = []
    out_cursor = cursor[':get_all_data']
    columns = out_cursor.column_metadata
    
    out_cursor.fetch do |row|
      summary_row = {}
      columns.each_with_index do |column, idx|
        summary_row[column.name.upcase] = row[idx]
      end
      summary_report << summary_row
    end

    out_cursor.close
    cursor.close
    conn.logoff

    summary_report
  end
end
