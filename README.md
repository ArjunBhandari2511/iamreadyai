# To-Do Application (Iam ReadyAI)

A simple To-Do application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This app allows users to **add and view tasks** in real-time.

## Features
✅ Add new tasks via a form  
✅ View all tasks in real-time  
✅ Backend API using **Express & MongoDB**  
✅ Frontend UI using **React**  

---

## 📁 Project Structure
```
/todo-app
│── backend/
│   ├── server.js
│   ├── models/
│   │   ├── Task.js
│   ├── routes/
│   │   ├── taskRoutes.js
│   ├── config/
│   │   ├── db.js
│   ├── package.json
│
│── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   ├── package.json
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```
#### Configure Environment Variables
Create a `.env` file in the `backend/` folder and add:
```sh
MONGO_URI=your_mongodb_connection_string
```
#### Start the Backend Server
```sh
node server.js
```

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
```
#### Start the React App
```sh
npm run dev
```

---

## 🌐 API Endpoints
| Method | Endpoint     | Description        |
|--------|-------------|--------------------|
| `POST` | `/api/tasks` | Add a new task    |
| `GET`  | `/api/tasks` | Fetch all tasks   |

---

## 📌 Usage
1️⃣ Open `http://localhost:5173` in your browser.  
2️⃣ Enter a task in the input field and click **Add Task**.  
3️⃣ The task will be stored in **MongoDB** and displayed in the list.  

---

## 📜 License
This project is **open-source** and free to use.

---

### 💡 Future Enhancements
- ✅ Delete tasks
- ✅ Mark tasks as completed
- ✅ Improve UI/UX

---

**Happy Coding! 🚀**

