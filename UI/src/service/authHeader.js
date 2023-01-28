import { findFromLocalStorage } from "../utils/localStorage";

const authHeader = () => {
  if (findFromLocalStorage("user")) {
    return findFromLocalStorage("user");
  } else {
    return false;
  }
};

export { authHeader };
