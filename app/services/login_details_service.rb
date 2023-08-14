class LoginDetailsService
    def self.get_user_details
        conn = OCI8.new('MISVPAY', 'MISVPAY@123', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=103.12.1.155)(PORT=1521))(CONNECT_DATA=(SID=xe)))')
        cursor = conn.parse('BEGIN sp_misvpay_get_user_details(:get_login_details); END;')
        cursor.bind_param(':get_login_details', nil, OCI8::Cursor)
        cursor.exec
        result_cursor = cursor[':get_login_details']
        user_details = []
        result_cursor.fetch_hash do |row|
            user_details << { emp_id: row['EMP_ID'], auth_token: row['AUTH_TOKEN'] }
        end
        result_cursor.close
        cursor.close
        conn.logoff
        user_details
    end

end
  