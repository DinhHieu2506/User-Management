🧑‍💼 User Management CRUD Application (React + Tailwind CSS)
🎯 Objective
Xây dựng một ứng dụng web quản lý người dùng, cho phép thực hiện đầy đủ các chức năng CRUD (Create, Read, Update, Delete). Dữ liệu được lưu trữ cục bộ bằng localStorage, hiển thị qua bảng tương tác.

🗂️ Application Pages (Gợi ý thứ tự phát triển)
Home Page: Giao diện chính, hiển thị danh sách người dùng và các chức năng quản lý.

✅ Core Functionalities
1. ➕ Add New User
Nhấn nút "+ Add New User" sẽ mở form (modal hoặc popup).

Trường bắt buộc: Name, Email, Role, Status.

Xác thực cơ bản: định dạng email hợp lệ, không để trống trường.

2. 👁️ View User List
Hiển thị dữ liệu trong bảng.

Cột gồm: NAME (có avatar hoặc placeholder), EMAIL, ROLE, STATUS, ACTIONS.

ROLE và STATUS dùng badge màu sắc riêng biệt.

3. 🛠️ Edit User
Nhấn nút "Edit" trên từng hàng sẽ hiện form với dữ liệu hiện tại để chỉnh sửa.

Lưu dữ liệu cập nhật vào localStorage.

4. 🗑️ Delete User
Nhấn "Delete" hiện hộp thoại xác nhận.

Xóa người dùng khỏi localStorage nếu xác nhận.

5. 🔍 Search Users
Thanh tìm kiếm (Search users...) lọc theo Name hoặc Email.

Kết quả lọc cập nhật ngay khi người dùng gõ.

🧱 Technologies & Architecture
Component-Based Architecture: Sử dụng component tái sử dụng: UserTable, UserForm, SearchBar, UserRow.

React Hooks: useState, useEffect để quản lý state và dữ liệu.

Controlled Forms: Xử lý form bằng onChange, onSubmit, onClick.

CRUD Logic: Đầy đủ chức năng thêm, đọc, sửa, xóa.

localStorage: Lưu trữ dữ liệu người dùng trong trình duyệt.

Conditional Rendering: Hiển thị có điều kiện (form, dialog...).

Styling:

Toàn bộ giao diện sử dụng Tailwind CSS.

Kết hợp UI framework như Ant Design (Antd) để dùng Table, Modal, Form, Button sẵn có.

Responsive Design: Tương thích trên desktop, tablet, mobile.

🖼️ Design Reference

