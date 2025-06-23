
import React from "react";
import { Input, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

export default function SearchBar({ onAddUser, searchTerm, onSearchChange }) {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 rounded-t-lg">
        <h1 className="text-xl font-semibold">User Management</h1>

        <div className="flex items-center gap-3">
          <Input
            placeholder="Search users..."
            prefix={<SearchOutlined className="text-gray-400" />}
            className="w-64"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={onAddUser}>
            Add New User
          </Button>
        </div>
      </div>
    </div>
  );
}
