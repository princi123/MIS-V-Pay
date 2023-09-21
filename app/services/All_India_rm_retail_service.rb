class AllIndiaRmRetailService
	def self.get_all_rm_details(start_date, end_date, select_type)
		conn = OCI8.new('MISVPAY', 'MISVPAY@123', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=103.12.1.155)(PORT=1521))(CONNECT_DATA=(SID=xe)))')
    select_column = (select_type == 'grosssales') ? 'grosssales' : 'netsales'
    procedure_name = 'sp_misvapay_transaction_summary_report_all_india_rm_wise'
    
    cursor = conn.parse("BEGIN #{procedure_name}(:p_startDate, :p_endDate, :p_selectType, :get_all_data); END;")
    
    cursor.bind_param(':p_startDate', start_date, String)
    cursor.bind_param(':p_endDate', end_date, String)
    cursor.bind_param(':p_selectType', select_type, String)
    cursor.bind_param(':get_all_data', nil, OCI8::Cursor)
    
    cursor.exec
    
    rm_report = []
    out_cursor = cursor[':get_all_data']
    columns = out_cursor.column_metadata
    
    out_cursor.fetch do |row|
      rm_row = {}
      columns.each_with_index do |column, idx|
        rm_row[column.name.upcase] = row[idx]
      end
      rm_report << rm_row
    end
    out_cursor.close
    cursor.close
    conn.logoff
    rm_report
	end
end