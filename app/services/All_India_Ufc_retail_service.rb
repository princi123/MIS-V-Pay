class AllIndiaUfcRetailService
	def self.get_all_ufc_details(start_date, end_date, select_type)
		conn = OCI8.new('MISVPAY', 'MISVPAY@123', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=103.12.1.155)(PORT=1521))(CONNECT_DATA=(SID=xe)))')
    select_column = (select_type == 'grosssales') ? 'grosssales' : 'netsales'
    procedure_name = 'sp_misvapay_transaction_summary_report_all_india_ufc_wise'
    
    cursor = conn.parse("BEGIN #{procedure_name}(:p_startDate, :p_endDate, :p_selectType, :get_all_data); END;")
    
    cursor.bind_param(':p_startDate', start_date, String)
    cursor.bind_param(':p_endDate', end_date, String)
    cursor.bind_param(':p_selectType', select_type, String)
    cursor.bind_param(':get_all_data', nil, OCI8::Cursor)
    
    cursor.exec
    
    ufc_report = []
    out_cursor = cursor[':get_all_data']
    columns = out_cursor.column_metadata
    
    out_cursor.fetch do |row|
      ufc_row = {}
      columns.each_with_index do |column, idx|
        ufc_row[column.name.upcase] = row[idx]
      end
      ufc_report << ufc_row
    end
    out_cursor.close
    cursor.close
    conn.logoff
    ufc_report
	end
end