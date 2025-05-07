export const getFromLocalStorage = <T>(key: string): T | null => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};

export const saveToLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const clearLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const clearAllLocalStorage = (): void => {
  localStorage.clear();
};

export const getAllLocalStorageAnswers = (): {
  key: string;
  value: string;
}[] => {
  return Object.keys(localStorage).map((key) => {
    const value = localStorage.getItem(key) || "";
    return { key, value };
  });
};
