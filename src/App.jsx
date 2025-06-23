import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import {
  getUsersFromStorage,
  addUserToStorage,
  deleteUserFromStorage,
} from "./utils/storage";

const removeAccents = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    setUsers(getUsersFromStorage());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleAddUser = (newUser) => {
    let updatedUsers;
    if (editingUser) {
      updatedUsers = users.map((u) => (u.id === newUser.id ? newUser : u));
    } else {
      updatedUsers = [...users, newUser];
    }

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleDeleteUser = (userId) => {
    deleteUserFromStorage(userId);
    setUsers(getUsersFromStorage());
  };
  const normalize = (str) => str.trim();
  const filteredUsers = users.filter((user) => {
    const search = normalize(debouncedSearchTerm);

    return (
      normalize(user.name).includes(search) ||
      normalize(user.email).includes(search)
    );
  });

  return (
    <div className=" bg-gray-100 ">
      <SearchBar
        onAddUser={() => setIsModalOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <UserTable
        users={filteredUsers}
        onDelete={handleDeleteUser}
        onEdit={(user) => {
          setEditingUser(user);
          setIsModalOpen(true);
        }}
      />

      <UserForm
        isModalOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false), setEditingUser(null);
        }}
        onAddUser={handleAddUser}
        initialValues={editingUser}
      />
    </div>
  );
}
