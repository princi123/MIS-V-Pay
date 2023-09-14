import { useState, useEffect } from 'react';
import { API_AUM_Region, API_AUM_UFC } from '../../../Constant/apiConstant';
import {API_AUM_period} from '../../../Constant/apiConstant';


export const useAUMApi = () => {
  const [aum_details, setAumDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(API_AUM_Region.DATA);
        const data = await response.json();
        setAumDetails(data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching AUM details", error);
      }
    };

    fetchData();
  }, []);

  return {aum_details,loading};
};

export const usePeriodApi = () => {
  const [aum_period, setAumPeriod] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(API_AUM_period.DATA);
        const data = await response.json();
        setAumPeriod(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching AUM details", error);
      }
    };

    fetchData();
  }, []);

  return{ aum_period, loading};
};

export const useUfc = () => {
  const [aum_ufc, setAumUfc] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(API_AUM_UFC.DATA);
        const data = await response.json();
        setAumUfc(data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching AUM details", error);
      }
    };
    fetchData();
  }, []);
  return {aum_ufc,loading};
};

 
 