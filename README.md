Challenge: Build a User Management CRUD Application with React.js & Tailwind CSS 

#Objective 

- Develop a web application for user management, allowing users to add, view, edit, and delete user information. Data will be stored locally and displayed in an interactive table. 

##Application Pages (Suggested Development Order) 

- Home Page: The main interface of the application, displaying the user list and management functionalities. 

###Core Functionalities 

- Add New User:  
When the "+ Add New User" button is clicked, display a form (e.g., in a modal or popup) to input user information. 
Minimum required fields: Name, Email, Role, and Status. 
Implement basic input validation (e.g., valid email format, required fields). 

- View User List:  
Display all user records in a data table (as shown in the image). 
Table columns must include: NAME (with avatar/placeholder), EMAIL, ROLE, STATUS, and ACTIONS. 
Display Role and Status as distinct, color-coded "badges" for better visual distinction. 

- Edit User:  
When the "Edit" button on a row is clicked, display a form (similar to the add new form) pre-filled with the user's current information for editing. 
Save the changes to the local data. 

- Delete User:  
When the "Delete" button on a row is clicked, display a confirmation dialog before proceeding with user deletion. 
Remove the user from the local data. 

- Search Users:  
Implement a search bar (like "Search users...") to filter the user list based on Name or Email. 
Search results should update instantly as the user types. 


####Technologies & Architecture 

- Component-Based Architecture: Structure the application using reusable React components (e.g., UserTable, UserForm, SearchBar, UserRow for individual table rows). 
- State & Props: Utilize React's useState and useEffect hooks for managing component state and application data. 
- Form Handling & Events: Manage form inputs as controlled components and handle events (onChange, onSubmit, onClick) effectively. 
- CRUD Operations: Fully implement Create, Read, Update, and Delete operations. 
- Local Storage: All user data must be stored and retrieved from the browser's localStorage. 
- Conditional Rendering: Use conditional rendering to show/hide UI elements (e.g., form modals, confirmation dialogs) based on application state. 
- Styling & UI Framework:  
- Utilize Tailwind CSS for all UI styling to ensure flexibility and high customizability. 
- Integrate with a UI framework to provide pre-built components, accelerating development and ensuring UI consistency. Ant Design (Antd) is recommended due to its robust Table, Form, Input, Button, and Modal components, which align well with the clean, professional look of your provided image. 

- Responsive Design: Ensure the application is fully responsive and functions well across various screen sizes (desktop, tablet, mobile). 

#####Link Design 
- https://i.ibb.co/zHGgNDRp/Screenshot-1.png 

 
