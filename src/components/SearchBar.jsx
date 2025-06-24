import React from "react";
import { Input, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

export default function SearchBar({ onAddUser, searchTerm, onSearchChange }) {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white border-b border-gray-200 rounded-t-lg gap-4">
        <h1 className="text-xl font-bold">User Management</h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <Input
            placeholder="Search users..."
            prefix={<SearchOutlined className="text-gray-400" />}
            className="w-full sm:w-64"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={onAddUser} className="w-full sm:w-auto">
            Add New User
          </Button>
        </div>
      </div>
    </div>
  );
}