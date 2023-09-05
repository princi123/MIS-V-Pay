import { useState, useEffect } from 'react';
import { API_AUM_Region } from '../../../Constant/apiConstant';
import {API_AUM_period} from '../../../Constant/apiConstant';


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
  }, []);

  return aum_details;
};

export const usePeriodApi = () => {
  const [aum_period, setAumPeriod] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_AUM_period.DATA);
        const data = await response.json();
        setAumPeriod(data);
        
      } catch (error) {
        console.error("Error fetching AUM details", error);
      }
    };

    fetchData();
  }, []);

  return aum_period;
};

 
 