// get user token from localstorage
const getToken = (key: string) => {
  // check token exists or not
  if (!key || typeof window === undefined) return "";
  return localStorage.getItem(key);
};

// set token in localStorage
const setToken = (key: string, value: string) => {
  // check token exists or not
  if (!key || typeof window === undefined) return "";
  return localStorage.setItem(key, value);
};

// remove token from localstorage
const removeToken = (key: string) => {
  if (!key || typeof window === undefined) return "";
  return localStorage.removeItem(key);
};

export { setToken, getToken, removeToken };
