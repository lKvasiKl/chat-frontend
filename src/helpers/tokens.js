const addSessionToStorage = (key, token) => localStorage.setItem(key, `${token}`);
const getSessionFromStorage = (key) => localStorage.getItem(key);
const removeSessionFromStorage = (key) => localStorage.removeItem(key);

export { addSessionToStorage, getSessionFromStorage, removeSessionFromStorage };
