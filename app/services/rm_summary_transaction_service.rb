require 'oci8'

class RmSummaryTransactionService
  def self.get_transaction_summary_report_rm(start_date, end_date, asset_class, select_type, employee_code,p_zone,region_name,ufc_code)
    conn = OCI8.new('MISVPAY', 'MISVPAY@123', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=103.12.1.155)(PORT=1521))(CONNECT_DATA=(SID=xe)))')
    select_column = (select_type == 'grosssales') ? 'grosssales' : 'netsales'
    procedure_name = 'sp_misvpay_get_transaction_summary_report_rm_wise'
    
    cursor = conn.parse("BEGIN #{procedure_name}(:p_startDate, :p_endDate, :p_assetClass, :p_selectType, :p_employeeCode, :p_zone, :p_region_name, :p_ufc_code, :get_all_data); END;")
    
    cursor.bind_param(':p_startDate', start_date, String)
    cursor.bind_param(':p_endDate', end_date, String)
    cursor.bind_param(':p_assetClass', asset_class, String)
    cursor.bind_param(':p_selectType', select_type, String)
    cursor.bind_param(':p_employeeCode', employee_code, String)
    cursor.bind_param(':p_zone', p_zone, String)
    cursor.bind_param(':p_region_name',region_name, String)
    cursor.bind_param(':p_ufc_code',ufc_code, String)
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
