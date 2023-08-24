class  SchemeService
    def self.get_scheme_details
      conn = OCI8.new('MISVPAY', 'MISVPAY@123', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=103.12.1.155)(PORT=1521))(CONNECT_DATA=(SID=xe)))')
      cursor = conn.parse('BEGIN SP_MISVPAY_GET_SCHEME_DROP_DOWN_DATA(:get_all_data); END;')
      cursor.bind_param(':get_all_data', nil, OCI8::Cursor)
      cursor.exec
      scheme_data = []
      out_cursor = cursor[':get_all_data']
      columns = out_cursor.column_metadata
      
      out_cursor.fetch do |row|
        scheme_row = {}
        columns.each_with_index do |column, idx|
            scheme_row[column.name.upcase] = row[idx]
        end
        scheme_data << scheme_row
      end
  
      out_cursor.close
      cursor.close
      conn.logoff
      scheme_data
    end
  end  
    