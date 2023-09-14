
const API = 'http://localhost:3000/api/v1';

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

export const API_AUM_Region = {
    DATA:  `${API}/aum_regions`,
};

export const API_AUM_period = {
    DATA: `${API}/aum`,
};

export const API_AUM_ufc = {
    DATA: `${API}/aum_ufc`,
};

