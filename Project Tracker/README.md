# Project Tracker

A full-stack web application for tracking and managing projects, built with Node.js, Express, MongoDB, and vanilla JavaScript.

## Features

- ✅ **Create Projects**: Add new projects with name, description, and status
- 📋 **View Projects**: Display all projects in a clean, organized list
- ✏️ **Update Projects**: Edit project details including name, description, and status
- 🔄 **Toggle Status**: Switch between "Ongoing" and "Completed" status
- 🗑️ **Delete Projects**: Remove projects from the tracker
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **Vanilla JavaScript** - Client-side logic
- **HTML5** - Markup
- **CSS3** - Styling
- **Fetch API** - HTTP requests

## Project Structure

```
Project Tracker/
├── backend/
│   ├── config/
│   │   └── env.js              # Environment configuration
│   ├── controllers/
│   │   └── projectController.js # Project CRUD operations
│   ├── models/
│   │   └── project.js          # Project data model
│   ├── routes/
│   │   └── routes.js           # API routes
│   ├── services/
│   │   └── projectServices.js  # Business logic
│   ├── index.js                # Server entry point
│   └── package.json            # Backend dependencies
├── frontend/
│   ├── index.html              # Main HTML file
│   ├── app.js                  # Frontend JavaScript
│   └── styles.css              # CSS styles
├── package.json                # Root dependencies
└── README.md                   # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Project Tracker"
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   cd ..
   ```

3. **Environment Configuration**
   - Create a `.env` file in the `backend` directory
   - Add your MongoDB connection string:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     APP_NAME=Project Tracker
     ```

4. **Start the application**
   ```bash
   # Start the backend server
   cd backend
   npm run dev
   
   # In a new terminal, serve the frontend
   # You can use any static file server or simply open index.html in a browser
   # For example, using Python:
   cd frontend
   python -m http.server 3000
   ```

5. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get a specific project |
| POST | `/api/projects` | Create a new project |
| PUT | `/api/projects/:id` | Update a project |
| DELETE | `/api/projects/:id` | Delete a project |

### Example API Usage

**Create a project:**
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My New Project",
    "description": "Project description here",
    "status": "Ongoing"
  }'
```

**Get all projects:**
```bash
curl http://localhost:5000/api/projects
```

## Usage

1. **Adding a Project**
   - Fill in the project name, description, and select status
   - Click "Submit" to add the project

2. **Managing Projects**
   - View all projects in the list below the form
   - Use "Update" to modify project details
   - Use "Mark as Complete/Ongoing" to toggle status
   - Use "Delete" to remove a project

3. **Project Status**
   - **Ongoing**: Projects currently in progress
   - **Completed**: Finished projects

## Development

### Running in Development Mode
```bash
# Backend with auto-reload
cd backend
npm run dev

# Frontend (serve static files)
cd frontend
# Use any static file server or open index.html directly
```

### Database Schema

The Project model includes:
- `name` (String, required): Project name
- `description` (String, required): Project description
- `status` (String, enum: ['Ongoing', 'Completed'], default: 'Ongoing'): Project status
- `createdAt` (Date): Creation timestamp
- `updatedAt` (Date): Last update timestamp

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Created as part of the ASTUMSJ Bootcamp Project Tracker assignment.

