require 'oci8'

class MandateReportService
  def self.get_mandate_report(emp_id, emp_role, year_quater, start_date, end_date, scheme_code, stype, status, zone, region_code, ufc_code)
    conn = OCI8.new('MISVPAY', 'MISVPAY@123', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=103.12.1.155)(PORT=1521))(CONNECT_DATA=(SID=xe)))')
    select_column = (stype == 'SIP') ? 'SIP' : 'STP'
    procedure_name = 'GET_MAND_REPORT_SIP_LIVE_DATA'
    
    cursor = conn.parse("BEGIN #{procedure_name}(:p_emp_id, :p_emp_role, :p_year_quater, :p_start_date, :p_end_date,p_scheme_code,p_stype,p_status,p_zone,p_region_code,p_ufc_code, :get_all_data); END;")
    
    cursor.bind_param(':p_emp_id', emp_id, String)
    cursor.bind_param(':p_emp_role', emp_role, String)
    cursor.bind_param(':p_year_quater', year_quater, String)
    cursor.bind_param(':p_start_date', start_date, String)
    cursor.bind_param(':p_end_date', end_date, String)
    cursor.bind_param(':p_scheme_code', scheme_code, String)
    cursor.bind_param(':p_stype', stype, String)
    cursor.bind_param(':p_status', status, String)
    cursor.bind_param(':p_zone', zone, String)
    cursor.bind_param(':p_region_code', region_code, String)
    cursor.bind_param(':p_ufc_code', ufc_code, String)
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
