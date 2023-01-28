const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

const findFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export { saveToLocalStorage, findFromLocalStorage, removeFromLocalStorage };
