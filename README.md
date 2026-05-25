# 🚀 TaskFlow Enterprise - SaaS Task Management System

A modern, enterprise-grade task management system built with React, Node.js, MongoDB, and real-time WebSocket capabilities.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Real-Time Features](#real-time-features)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

### Frontend
- **Responsive SaaS Dashboard** - Beautiful, modern UI built with React + Vite
- **Real-Time Kanban Board** - Drag-and-drop task management with instant synchronization
- **Live Analytics** - Productivity metrics with Recharts visualizations
- **Team Collaboration** - Real-time chat and activity feed
- **Redux State Management** - Centralized state with Redux Toolkit
- **Socket.IO Integration** - Live updates across all clients
- **Tailwind CSS** - Modern utility-first styling
- **Framer Motion Animations** - Smooth, professional animations

### Backend
- **JWT Authentication** - Secure token-based authentication
- **RBAC Authorization** - Role-based access control (Admin, Manager, Employee)
- **RESTful APIs** - Clean, well-documented endpoints
- **Real-Time WebSockets** - Socket.IO for live updates
- **MongoDB Integration** - NoSQL database with Mongoose ODM
- **Redis Caching** - High-performance cache layer
- **Rate Limiting** - API rate limiting and DDoS protection
- **Security Headers** - Helmet.js for security hardening

## 🏗️ Architecture

```
┌────────────────────────────────────────────────────────────┐
│                     CLIENT APPLICATION                     │
│────────────────────────────────────────────────────────────│
│ React.js + Vite | Tailwind CSS | Framer Motion            │
│ Redux Toolkit + React Query | Socket.IO Client            │
│ Recharts + DnD Kit | Responsive SaaS Dashboard            │
└────────────────────────────────────────────────────────────┘
                         │
               REST API + WebSocket
                         │
                         ▼
┌────────────────────────────────────────────────────────────┐
│                    EXPRESS BACKEND API                    │
│────────────────────────────────────────────────────────────│
│ JWT Authentication | RBAC Authorization                   │
│ Task Management Service | Project Management              │
│ Notification Service | Real-Time Socket.IO Layer          │
│ Analytics Engine | File Upload Service                    │
└────────────────────────────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
 ┌────────────┐   ┌────────────┐   ┌────────────┐
 │ MongoDB    │   │ Redis      │   │ Cloudinary │
 │ Atlas      │   │ Cache      │   │ Storage    │
 └────────────┘   └────────────┘   └────────────┘
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Redux Toolkit** - State management
- **Axios** - HTTP client
- **Socket.IO Client** - Real-time communication
- **React Router v6** - Client-side routing
- **Recharts** - Data visualization
- **DnD Kit** - Drag and drop functionality

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Socket.IO** - Real-time communication
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Helmet** - Security headers
- **Redis** - Caching layer
- **Cloudinary** - File storage

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **GitHub Actions** - CI/CD pipeline

## 📁 Project Structure

```
task-management-system/
│
├── client/                          # React Frontend
│   ├── src/
│   │   ├── api/                    # API service configurations
│   │   ├── components/
│   │   │   ├── common/            # Reusable components
│   │   │   ├── dashboard/         # Dashboard components
│   │   │   ├── kanban/           # Kanban board components
│   │   │   ├── auth/             # Auth components
│   │   │   └── charts/           # Chart components
│   │   ├── layouts/               # Layout components
│   │   ├── pages/                 # Page components
│   │   ├── redux/
│   │   │   ├── slices/           # Redux slices
│   │   │   └── store.js          # Redux store config
│   │   ├── services/
│   │   │   ├── apiService.js    # API calls
│   │   │   └── socketService.js # Socket.IO config
│   │   ├── hooks/                # Custom React hooks
│   │   ├── App.jsx               # Main App component
│   │   └── main.jsx              # Entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── Dockerfile
│
├── server/                          # Express Backend
│   ├── models/                     # MongoDB schemas
│   │   ├── User.js
│   │   ├── Task.js
│   │   ├── Project.js
│   │   └── Notification.js
│   ├── controllers/                # Business logic
│   │   ├── authController.js
│   │   ├── taskController.js
│   │   ├── projectController.js
│   │   └── notificationController.js
│   ├── routes/                     # API routes
│   │   ├── auth.js
│   │   ├── tasks.js
│   │   ├── projects.js
│   │   └── notifications.js
│   ├── middleware/                 # Custom middleware
│   │   └── auth.js
│   ├── server.js                   # Server entry point
│   ├── package.json
│   ├── .env.example
│   └── Dockerfile
│
├── docker-compose.yml              # Docker services config
├── .github/
│   └── workflows/
│       └── deploy.yml             # CI/CD pipeline
├── README.md
└── .gitignore
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- MongoDB 7.0+
- Redis 7+
- Docker & Docker Compose (optional)

### Option 1: Local Development

```bash
# Clone repository
git clone https://github.com/yourusername/task-management-system.git
cd task-management-system

# Setup Backend
cd server
cp .env.example .env
npm install
npm run dev

# Setup Frontend (in another terminal)
cd client
cp .env.example .env.local
npm install
npm run dev
```

### Option 2: Docker Compose

```bash
# Clone and setup
git clone https://github.com/yourusername/task-management-system.git
cd task-management-system

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f
```

## ⚙️ Configuration

### Frontend (.env.local)
```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskflow
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:3000
CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
NODE_ENV=development
```

## 🏃 Running the Application

### Development

```bash
# Backend
cd server
npm run dev          # Starts on port 5000

# Frontend (in another terminal)
cd client
npm run dev          # Starts on port 3000
```

### Production

```bash
# With Docker Compose
docker-compose up -d

# Manual
cd server && npm start
cd client && npm run build && npm run preview
```

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/logout` - Logout user

### Tasks
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task by ID
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Notifications
- `GET /api/notifications` - Get user notifications
- `PUT /api/notifications/:id/read` - Mark as read
- `DELETE /api/notifications/:id` - Delete notification

## 🔄 Real-Time Features

### Socket.IO Events

**Task Events:**
- `task:update` - Task updated
- `task:create` - Task created
- `task:delete` - Task deleted

**Chat Events:**
- `chat:message` - Send message
- `chat:receive` - Receive message

**Project Events:**
- `joinProject` - Join project room
- `taskUpdated` - Task updated in project
- `receiveTaskUpdate` - Receive project update

**Presence:**
- `user:online` - User comes online
- `user:offline` - User goes offline

## 🚀 Deployment

### Docker Push
```bash
docker build -t your-registry/taskflow-frontend:latest ./client
docker build -t your-registry/taskflow-backend:latest ./server
docker push your-registry/taskflow-frontend:latest
docker push your-registry/taskflow-backend:latest
```

### Environment Variables for Production
Set these in your deployment platform:
- MONGO_URI
- JWT_SECRET
- REDIS_URL
- CLOUDINARY_API credentials
- CLIENT_URL
- NODE_ENV=production

## 📊 Performance Features

- **Rate Limiting** - Protect API from abuse
- **Redis Caching** - Fast data retrieval
- **Optimistic Updates** - Instant UI feedback
- **Code Splitting** - Faster initial load
- **CDN Ready** - Optimize static assets
- **Database Indexing** - Fast queries

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcryptjs
- CORS protection
- CSRF prevention
- Rate limiting
- Security headers (Helmet.js)
- Input validation
- SQL injection prevention
- XSS protection

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 💬 Support

For support, email support@taskflow.com or open an issue on GitHub.

## 🎯 Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Time tracking integration
- [ ] Email notifications
- [ ] Calendar view
- [ ] File sharing
- [ ] Advanced search
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] API rate limiting per tier

---

**Built with ❤️ by the TaskFlow Team**
