💼 User Management CRUD Application
🧩 Challenge
Build a User Management CRUD Application using React.js, Tailwind CSS, and Ant Design.

🎯 Objective
Develop a web application for user management, allowing users to:

✅ Add

🔍 View

✏️ Edit

🗑️ Delete

user information.
👉 All data will be stored in localStorage and displayed in an interactive table.

📄 Application Pages
🏠 Home Page
The main interface of the application.

Displays the user list and all management functionalities.

⚙️ Core Functionalities
1. ➕ Add New User
Click "+ Add New User" to open a modal with a user form.

Required fields: Name, Email, Role, and Status.

Validation:

All fields required

Valid email format

2. 👀 View User List
Display all user records in a data table.

Columns: NAME (with avatar or placeholder), EMAIL, ROLE, STATUS, ACTIONS.

Use color-coded badges for Role and Status.

3. ✏️ Edit User
Click the Edit button in a user row to open the form (modal) pre-filled with current data.

Save updates to localStorage.

4. 🗑️ Delete User
Click the Delete button in a user row.

Show a confirmation dialog before deletion.

Remove the user from localStorage upon confirmation.

5. 🔍 Search Users
Include a search bar with placeholder: "Search users...".

Filter users based on Name or Email.

Instant results as the user types.

🧱 Technologies & Architecture
✅ React.js: Functional components, Hooks (useState, useEffect)

✅ Tailwind CSS: Utility-first styling

✅ Ant Design (Antd): UI Components (Table, Form, Input, Button, Modal)

✅ Local Storage: Store user data in browser

✅ Component-based architecture:

SearchBar

UserTable

UserForm

UserRow

✅ Form Handling: Controlled components with event handling (onChange, onSubmit)

✅ CRUD Operations: Full Create, Read, Update, Delete support

✅ Conditional Rendering: Modals, alerts based on state

✅ Responsive Design: Mobile-first, optimized for desktop, tablet, and phone

📐 UI Design Reference
📸 View UI Design
