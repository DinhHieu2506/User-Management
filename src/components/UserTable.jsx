import { Button, Modal, Space, message } from "antd";
import {DeleteOutlined,EditOutlined,ExclamationCircleOutlined,} from "@ant-design/icons";

export default function UserTable({ users, onDelete, onEdit }) {
  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        onDelete(id);
        message.success("User deleted successfully");
      },
    });
  };

  const getRoleStyle = (role) => {
  switch (role) {
    case "Admin":
      return "bg-blue-100 text-blue-800"; 
    case "User":
      return "bg-blue-100 text-blue-800";
    case "Moderator":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-200 text-gray-600";
  }
};

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="bg-white rounded-lg shadow-md">
         <div>
        <h1 className="text-xl font-semibold px-6 py-3 border-b border-gray-200">User List</h1>
      </div>
      <div className="grid grid-cols-12 gap-4 px-6 py-3 text-sm font-semibold text-gray-500">
        <div className="col-span-3">NAME</div>
        <div className="col-span-3">EMAIL</div>
        <div className="col-span-2">ROLE</div>
        <div className="col-span-2">STATUS</div>
        <div className="col-span-2">ACTIONS</div>
      </div>

      {users.map((user) => (
        <div
          key={user.id}
          className="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-gray-50 border-b border-gray-200"
        >
          <div className="col-span-3 flex items-center">
            <img
              src={user.avatar || `https://i.pravatar.cc/100?u=${user.email}`}
              alt={user.name}
              className="h-8 w-8 rounded-full mr-3"
            />

            <span className="text-sm font-medium text-gray-900">
              {user.name}
            </span>
          </div>
          <div className="col-span-3 text-sm text-gray-600">{user.email}</div>
          <div className="col-span-2">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getRoleStyle(user.role)}`}>
              {user.role}
            </span>
          </div>
          <div className="col-span-2">
            <span
              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                user.status === "Active"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {user.status}
            </span>
          </div>
          <div className="col-span-2 flex gap-2">
            <Space>
              <Button type="primary" size="small" icon={<EditOutlined />} onClick={() => onEdit(user)} >
                Edit
              </Button>
              <Button
                type="primary"
                danger
                size="small"
                icon={<DeleteOutlined />}
                onClick={() => showDeleteConfirm(user.id)}
              >
                Delete
              </Button>
            </Space>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
