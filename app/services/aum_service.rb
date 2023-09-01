class AumService
  def self.get_aum_details
    conn = OCI8.new('MISVPAY', 'MISVPAY@123', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=103.12.1.155)(PORT=1521))(CONNECT_DATA=(SID=xe)))')
    procedure_name = 'sp_misvpay_get_aum_based_reports'
    cursor = conn.parse("BEGIN #{procedure_name}(:p_report_period, :get_all_data); END;")
    report_period = 'your_report_period_value'
    cursor.bind_param(':p_report_period', report_period)
    cursor.bind_param(':get_all_data', nil, OCI8::Cursor)    
    cursor.exec
    result_cursor = cursor[':get_all_data']   
    aum_details = []
    result_cursor.fetch_hash do |row|
      aum_details << { p_report_period: row['p_report_period'] }
    end   
    result_cursor.close
    cursor.close
    conn.logoff
    return aum_details.to_json
  end
end
