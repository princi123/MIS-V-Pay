class AumUfcService
    def self.get_aum_ufc_details
      conn = OCI8.new('MISVPAY', 'MISVPAY@123', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=103.12.1.155)(PORT=1521))(CONNECT_DATA=(SID=xe)))')
      procedure_name = 'sp_misvpay_get_aum_based_reports_ufc_wise'
      cursor = conn.parse("BEGIN #{procedure_name}(:get_all_data); END;")
  
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