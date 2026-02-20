# Raksha - Women Safety Platform 🚨

## Project Overview

Raksha is a comprehensive full-stack web application designed for women's safety. It provides:

- **Emergency SOS System** - One-tap emergency alerts
- **Location Sharing** - Real-time GPS tracking with Google Maps integration
- **Contact Management** - Add and manage emergency contacts
- **Alert History** - Track all SOS alerts with timestamps and locations

## 📦 Monorepo Structure

```
raksha/
├── backend/          # Express.js API server (port 5000)
├── frontend/         # React web app (port 3000)
├── package.json      # Root package config
├── setup.sh          # Installation script
└── README.md
```

## ⚡ Quick Start

### One-Command Setup
```bash
bash setup.sh
npm start
```

### Manual Setup
```bash
# Install all dependencies
npm run install-all

# Start both services
npm start

# Or start separately
npm run backend  # Terminal 1
npm run frontend # Terminal 2
```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 🏗️ Architecture

### **Frontend (React)**
- Component-based UI
- Real-time location tracking
- Emergency contact management
- Alert history viewing

### **Backend (Express)**
- REST API endpoints
- SQLite database
- Contact management
- SOS alert handling

### **Database (SQLite)**
- `emergency_contacts` - User's emergency contacts
- `sos_alerts` - SOS alert records
- `alert_recipients` - Alert delivery tracking

## 🔌 Key Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/sos/trigger` | Trigger emergency alert |
| GET | `/api/sos/history` | Fetch SOS history |
| POST | `/api/sos/cancel/:id` | Cancel SOS |
| GET | `/api/contacts` | Get all contacts |
| POST | `/api/contacts` | Add contact |
| DELETE | `/api/contacts/:id` | Delete contact |
| POST | `/api/location/maps-link` | Generate maps link |

## 📱 Features

✅ One-tap SOS button
✅ 10-second confirmation countdown
✅ Real-time GPS location tracking
✅ Google Maps integration
✅ Emergency contact management
✅ Alert history tracking
✅ Dark UI optimized for emergency use
✅ Responsive mobile design
✅ Vibration feedback on trigger

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, Axios, React Icons |
| **Backend** | Node.js, Express.js |
| **Database** | SQLite3 |
| **APIs** | Geolocation API, Google Maps |

## 📋 Folder Structure

```
frontend/
├── src/
│   ├── components/       # React components
│   ├── styles/          # CSS files
│   ├── App.js           # Main app
│   └── index.js         # Entry point
└── public/index.html    # HTML template

backend/
├── src/
│   ├── controllers/     # API handlers
│   ├── routes/          # API routes
│   ├── database.js      # DB setup
│   └── server.js        # Express app
└── raksha.db            # SQLite database (auto-created)
```

## 📄 Configuration Files

- `.gitignore` - Git exclude rules
- `.env` - Environment variables (backend)
- `package.json` - Dependency management
- Root `package.json` - Workspace config with concurrently

## 🚀 Development Workflow

1. **Start services**: `npm start`
2. **Edit frontend**: Changes hot-reload automatically
3. **Edit backend**: Restart with `npm run backend`
4. **View logs**: Check terminal output
5. **Debug**: Use browser DevTools (Ctrl+Shift+I)

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5000/3000 in use | Kill process or use different port |
| Location not working | Enable geolocation in browser |
| API connection error | Verify backend is running |
| Database error | Delete `backend/raksha.db` and restart |

## 📚 Documentation

- [Backend README](backend/README.md) - API documentation
- [Frontend README](frontend/README.md) - Component guide

## 🤝 Contributing

1. Clone repository
2. Create feature branch
3. Make changes
4. Submit pull request

## 📞 Support

For issues or feature requests, create a GitHub Issue.

## 📜 License

MIT License

---

**The name "Raksha" means "Protection" in Hindi. Built with ❤️ for women's safety.**

💪 Stay Safe. Stay Connected.
