/**
 * Custom hook to handle local storage
 * @param {string} key - key to store in local storage
 *
 * @returns {object} - object with setItem, getItem and removeItem functions
 * */

function useLocalStorage(key) {
  const setItem = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = () => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  const removeItem = () => {
    window.localStorage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
}

export default useLocalStorage;
