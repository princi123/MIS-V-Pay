import Cookies from "js-cookie";

export const setAuthTokenCookie = (empId, token) => {
  const cookieValue = JSON.stringify({ empId, token });
  Cookies.set("authToken", cookieValue, { expires: 1 });
};

export const getAuthTokenCookie = () => {
  const cookieValue = Cookies.get("authToken");
  return cookieValue ? JSON.parse(cookieValue) : null;
};

export const removeAuthTokenCookie = () => {
  Cookies.remove("authToken");
};
