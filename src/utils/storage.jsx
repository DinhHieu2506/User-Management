const STORAGE_KEY = 'users';

export const getUsersFromStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveUsersToStorage = (users) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const addUserToStorage = (user) => {
  const users = getUsersFromStorage();
  users.push(user);
  saveUsersToStorage(users);
};

export const deleteUserFromStorage = (userId) => {
  const users = getUsersFromStorage();
  const updatedUsers = users.filter((u) => u.id !== userId);
  saveUsersToStorage(updatedUsers);
};


