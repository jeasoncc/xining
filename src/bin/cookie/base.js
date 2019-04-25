import Cookies from "js-cookie";

const TokenKey = "Authorization";

export function getKey() {
  return Cookies.get(TokenKey);
}

export function setKey(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getCustomerID() {
  return Cookies.get("customerID");
}

export function setCustomerID(customerID) {
  return Cookies.set("customerID", customerID);
}

export function removeCustomerID() {
  return Cookies.remove("customerID");
}

export var setUser = prame => {
  Cookies.set("userInfo", prame);
};
export var getUser = () => {
  return Cookies.get("userInfo");
};
export var removeUser = () => {
  return Cookies.remove("userInfo");
};
