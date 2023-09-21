class AssetClassDropdownService
    def self.get_assetclass_details(asset_class)
    conn = OCI8.new('MISVPAY', 'MISVPAY@123', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=103.12.1.155)(PORT=1521))(CONNECT_DATA=(SID=xe)))')
      cursor = conn.parse('BEGIN SP_MISVPAY_SCHEME_DROPDOWN_AS_A_ASSET_CLASS(:p_asset_class, :get_all_data); END;')
      cursor.bind_param(':p_asset_class', asset_class, String)
      cursor.bind_param(':get_all_data', nil, OCI8::Cursor)
      cursor.exec
      assetclass_data = []
      out_cursor = cursor[':get_all_data']
      columns = out_cursor.column_metadata
      
      out_cursor.fetch do |row|
        assetclass_row = {}
        columns.each_with_index do |column, idx|
            assetclass_row[column.name.upcase] = row[idx]
        end
        assetclass_data << assetclass_row
      end
  
      out_cursor.close
      cursor.close
      conn.logoff
      assetclass_data
    end
end