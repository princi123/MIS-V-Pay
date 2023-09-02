import { useState, useEffect } from 'react';
import { API_AUM_Region } from '../../../Constant/apiConstant';

export const useAUMApi = () => {
  const [aum_details, setAumDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_AUM_Region.DATA);
        const data = await response.json();
        setAumDetails(data);
        
      } catch (error) {
        console.error("Error fetching AUM details", error);
      }
    };

    fetchData();
  }, [aum_details]);

  return aum_details;
};
