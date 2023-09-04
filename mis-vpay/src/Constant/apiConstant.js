import axios from 'axios';

const API = 'http://localhost:3000/api/v1';

const axiosInstance = axios.create({
    baseURL: API,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); 
      const empId = localStorage.getItem('emp_id'); 

      if (token && empId) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['emp_id'] = empId;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export const API_LOGIN = {
    DATA: `${API}/login_details`,
};

export const API_SUMMARY_TRANSACTION = {
    DATA: (queryParams) => `${API}/summary_transactions?${queryParams}`,
};

export const API_SCHEME_DETAILS = {
    DATA: `${API}/scheme_details`,
};

export const API_REGION = {
    DATA: (queryParams) => `${API}/region_summary_transactions?${queryParams}`,
};

export const API_UFC = {
    DATA: (queryParams) => `${API}/ufc_summary_transactions?${queryParams}`,
};

export const API_RM = {
    DATA: (queryParams) => `${API}/rm_summary_transactions?${queryParams}`,
};

export default axiosInstance;
