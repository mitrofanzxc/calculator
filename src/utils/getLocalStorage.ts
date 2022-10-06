const getLocalStorage = (value: string) => {
  const localStorageValue = localStorage.getItem(value) || null;

  if (localStorageValue) {
    return JSON.parse(localStorageValue);
  }

  return null;
};

export { getLocalStorage };
