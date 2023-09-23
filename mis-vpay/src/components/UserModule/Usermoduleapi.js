import { useState, useEffect, useMemo } from 'react';
import { API_MANAGE_USER_CHANNEL_CODE_DROPDOWN } from "../../Constant/apiConstant";
import { API_MANAGE_USER_REPORTING_ROLE_DROPDOWN } from "../../Constant/apiConstant";
import { API_MANAGE_USER_POWER_USER_DROPDOWN } from "../../Constant/apiConstant";
import {API_MANAGE_USER_FUNCTIONAL_ROLE_DROPDOWN} from "../../Constant/apiConstant";
import {API_MANAGE_USER_CITY_DROPDOWN} from "../../Constant/apiConstant";

export const Usermodulechannelcodedropdown = () => {
    const [channel_code, setChannel_code] = useState([]);
    const queryParams = new URLSearchParams({
        valid_upto: "30-DEC-9999"
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_MANAGE_USER_CHANNEL_CODE_DROPDOWN.DATA(queryParams));
                const data = await response.json();
                setChannel_code(data);
            } catch (error) {
                console.error("Error fetching AUM details", error);
            }
        };

        fetchData();
    }, []);
    return { channel_code };
};

export const Usermodulereportingroledropdown = () => {
    const [reporting_role, setReporting_role] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_MANAGE_USER_REPORTING_ROLE_DROPDOWN.DATA);
                const data = await response.json();
                setReporting_role(data);
            } catch (error) {
                console.error("Error fetching AUM details", error);
            }
        };
        fetchData();
    }, []);
    return { reporting_role }
}

export const Usermodulepoweruserdropdown = () => {
  const [power_user, setPower_user] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(API_MANAGE_USER_POWER_USER_DROPDOWN.DATA);
              const data = await response.json();
              setPower_user(data);
          } catch (error) {
              console.error("Error fetching AUM details", error);
          }
      };
      fetchData();
  }, []);
  return { power_user }
}

export const Usermodulfunctionalroledropdown = () => {
    const [functional_role, setFunctional_role] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_MANAGE_USER_FUNCTIONAL_ROLE_DROPDOWN.DATA);
                const data = await response.json();
                setFunctional_role(data);
            } catch (error) {
                console.error("Error fetching AUM details", error);
            }
        };
        fetchData();
    }, []);
    return { functional_role }
  }

  export const Usermodulecitydropdown = () => {
    const [city, setCity] = useState([]);
    const queryParams = new URLSearchParams({
        city_type: "T5",
        valid_upto: "30-DEC-9999"
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_MANAGE_USER_CITY_DROPDOWN.DATA(queryParams));
                const data = await response.json();
                setCity(data);
            } catch (error) {
                console.error("Error fetching AUM details", error);
            }
        };

        fetchData();
    }, []);
    return { city };
};

