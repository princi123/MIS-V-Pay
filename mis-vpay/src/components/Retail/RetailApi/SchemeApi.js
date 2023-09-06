import {useState, useEffect} from 'react'
import { API_SCHEME_DETAILS } from '../../../Constant/apiConstant';
import axiosInstance from '../../../Constant/apiConstant';

const SchemeApi = () => {
    const [scheme_details, setSchemeDetails] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosInstance.get(API_SCHEME_DETAILS.DATA);
            const data = response.data;
            // const data = await response.json();
            setSchemeDetails(data);
          } catch (error) {
            console.error("error fetching scheme details", error);
          }
        };
        fetchData();
      }, []);

  return scheme_details
}

export default SchemeApi