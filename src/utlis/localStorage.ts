// get user token from localstorage
const getToken = (key: string) => {
  // check token exists or not
  // if  return "";
  // return !key && typeof window === "undefined" ? "" : localStorage.getItem(key);
  if (key && typeof window !== "undefined") {
    return localStorage.getItem(key);
  } else {
    return "";
  }
};

// set token in localStorage
const setToken = (key: string, value: string) => {
  // check token exists or not
  // if (!key || typeof window === undefined) return "";
  // return !key && typeof window === "undefined"
  //   ? ""
  //   : localStorage.setItem(key, value);
  if (key && typeof window !== "undefined") {
    return localStorage.setItem(key, value);
  } else {
    return "";
  }
};

// remove token from localstorage
const removeToken = (key: string) => {
  // if (!key || typeof window === undefined) return "";
  // return !key && typeof window === "undefined"
  //   ? ""
  //   : localStorage.removeItem(key);
  if (key && typeof window !== "undefined") {
    return localStorage.removeItem(key);
  } else {
    return "";
  }
};

export { setToken, getToken, removeToken };
