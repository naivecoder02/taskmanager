# TaskManager App-Front-End

### Note: For getting the backend of this project go the link :https://github.com/naivecoder02/taskmanager-api


### Description:
TaskManager is a web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to manage their tasks efficiently by providing features like task creation, updating, deletion, and marking tasks as completed.

### Features:
- **User Authentication:** Users can register and login to their accounts securely.<br>
- **Task Management:** Create, update, delete, and mark tasks as completed.<br>
- **Responsive Design:** The application is designed to work seamlessly on various devices and screen sizes.<br>
- **Backend-frontend Separation:** Backend and frontend are developed separately for better organization and scalability.<br>
- **RESTful API:** The backend provides a RESTful API for handling requests from the frontend.<br>
- **Data Persistence:** Tasks and user information are stored in a MongoDB database, ensuring data persistence.<br>
- **Error Handling:** Comprehensive error handling to provide a smooth user experience.<br>
- **Security:** Implementation of authentication and authorization mechanisms to ensure data security.<br>

---

### Installation Guide:

#### Prerequisites:
- Node.js and npm installed on your system.
- MongoDB installed and running.

#### Backend Setup:
1. Navigate to the `backend` directory.<br>
  ``cd backend``
3. Run ``npm install`` to install dependencies.
4. Create a `.env` file in the `backend` directory and set the following variables:
   ```
   PORT=3001 
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   GMAIL_USERNAME=<your email>
   GMAIL_PASSWORD=<your gmail password or App Password Generated in the settings of your gmail account
   ```
5. Run ``npm start`` to start the backend server.

#### Frontend Setup:
1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
   REACT_APP_API_URL=http://localhost:3001/api (present in the Axios folder of frontend src)
   Note: Replace `http://localhost:3001/api` with your backend API URL if it's different.
3. Run `npm start` to start the frontend server.

### Execution Methods:

#### Development Mode:
- Run backend server: `npm start` in the `backend` directory.
- Run frontend server: `npm start` in the `frontend` directory.

#### Production Mode:
- Build the frontend: `npm run build` in the `frontend` directory.
- Run backend server: `npm start` in the `backend` directory.

---
