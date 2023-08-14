require 'oci8'
class SummaryTransactionService
  def self.get_transaction_summary_report
    conn = OCI8.new('MISVPAY', 'MISVPAY@123', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=103.12.1.155)(PORT=1521))(CONNECT_DATA=(SID=xe)))')
    
    begin
      cursor = conn.parse('BEGIN sp_misvapay_get_transaction_summary_report(:p_startDate, :p_endDate, :p_assetClass, :p_selectType, :p_employeeCode, :get_all_data); END;')
      cursor.bind_param(':p_startDate', '01/04/2023')
      cursor.bind_param(':p_endDate', '30/09/2023')
      cursor.bind_param(':p_assetClass', 1)
      cursor.bind_param(':p_selectType', 1)
      cursor.bind_param(':p_employeeCode', '2941')
      cursor.bind_param(':get_all_data', nil, OCI8::Cursor)
      
      cursor.exec
      
      result_cursor = cursor[:get_all_data]
      summary_report = []
      
      if result_cursor
        result_cursor.fetch_hash do |row|
          summary_report << { 
            p_startDate: row['p_startDate'],
            p_endDate: row['p_endDate'],
            p_assetClass: row['p_assetClass'],
            p_selectType: row['p_selectType'],
            p_employeeCode: row['p_employeeCode']
          }
        end
        result_cursor.close
      else
        puts "No data returned from the stored procedure."
      end
    rescue OCIError => e
      puts "Error: #{e.message}"
    ensure
      cursor.close if cursor
      conn.logoff if conn
    end 
    summary_report
  end
end
