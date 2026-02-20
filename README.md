# Raksha – Women Safety Platform 🚨

A comprehensive full-stack women safety web application providing real-time emergency alerts, live location sharing, and crisis management features.

## 🎯 Features

### 🔴 **Emergency SOS System**
- One-tap SOS button with visual feedback
- 10-second countdown for alert confirmation
- Real-time GPS location tracking
- Automatic emergency contact notification

### 📍 **Location Sharing**
- Precise geolocation tracking via browser API
- Google Maps integration for location sharing
- Shareable links for WhatsApp, Telegram, SMS
- Continuous location updates

### 👥 **Emergency Contacts Management**
- Add/edit/delete emergency contacts
- Primary contact designation
- Relationship tracking (mother, friend, police, etc.)
- Quick access to contact list

### 📋 **Alert History**
- Complete SOS alert history tracking
- Status monitoring (Active/Resolved)
- Timeline view with timestamps
- Location reference for each alert

### 🎨 **Modern Dark UI**
- Responsive design for mobile and desktop
- Dark theme optimized for night use
- Intuitive navigation with bottom tab bar
- Real-time status updates

---

## 🛠 Tech Stack

### **Frontend**
- React 18
- Axios (HTTP client)
- React Icons
- CSS3 with animations
- Geolocation API

### **Backend**
- Node.js + Express.js
- SQLite3 database
- CORS enabled
- RESTful API architecture

### **Database**
- SQLite (portable, no setup required)
- Tables: Emergency Contacts, SOS Alerts, Alert Recipients

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 14+ installed
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### **Installation & Setup**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/raksha.git
   cd raksha
   ```

2. **Install dependencies:**
   ```bash
   npm run install-all
   ```

3. **Start both frontend and backend:**
   ```bash
   npm start
   ```

   Or run separately in different terminals:
   ```bash
   # Terminal 1 - Backend
   npm run backend
   
   # Terminal 2 - Frontend
   npm run frontend
   ```

4. **Open in browser:**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

---

## 📁 Project Structure

```
raksha/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── routes/          # API endpoints
│   │   ├── database.js      # SQLite setup
│   │   └── server.js        # Express server
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── styles/          # CSS files
│   │   ├── App.js           # Main app
│   │   └── index.js         # React entry point
│   ├── public/index.html    # HTML template
│   └── package.json
├── package.json             # Root package config
└── README.md
```

---

## 🔌 API Endpoints

### **SOS Alerts**
- `POST /api/sos/trigger` - Trigger emergency alert
- `GET /api/sos/history` - Fetch alert history
- `POST /api/sos/cancel/:id` - Cancel active SOS

### **Emergency Contacts**
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Add new contact
- `PUT /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact
- `POST /api/contacts/:id/primary` - Set primary contact

### **Location**
- `POST /api/location/maps-link` - Generate maps link & messages

---

## 🎬 How to Use

1. **Add Emergency Contacts:**
   - Go to "Contacts" tab
   - Click "Add Contact"
   - Enter name, phone, relationship
   - Mark primary contact

2. **Trigger SOS:**
   - Enable location access in browser
   - Press the red SOS button
   - Confirm within 10 seconds
   - App sends alerts to emergency contacts

3. **View Alert History:**
   - Go to "History" tab
   - See all past SOS alerts
   - Click maps link to view location

4. **Share Location:**
   - Use "View on Google Maps" link
   - Share via WhatsApp/Telegram
   - Get shareable SMS message

---

## 🔒 Security & Privacy

- No data is stored on external servers
- SQLite database stored locally
- CORS protection enabled
- Location data shared only upon SOS trigger
- Users maintain full control over data

---

## 📱 Browser Requirements

- Geolocation API support
- Modern JavaScript ES6+
- Vibration API (for haptic feedback)
- HTTPS recommended for production

---

## 🐛 Troubleshooting

**Location not working?**
- Enable location permission in browser
- Check if browser supports Geolocation API
- Ensure HTTPS (required for location on production)

**Backend not responding?**
- Verify Node.js is running on port 5000
- Check if dependencies are installed: `npm install -g npm`
- Database file: `/backend/raksha.db` (auto-created)

**CORS errors?**
- Backend CORS is already configured
- Check if frontend URL matches backend expectations
- Verify both services are running

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open Pull Request

---

## 📜 License

MIT License - See LICENSE file for details

---

## 🏆 About

Raksha is built with ❤️ for women's safety and emergency response. The name "Raksha" means "protection" in Hindi, symbolizing our commitment to safeguarding lives.

**Created for:** Women empowerment, safety, and rapid emergency response

---

## 📞 Support

For issues, feature requests, or feedback:
- Create an Issue on GitHub
- Contact: [support email]

---

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by real-world safety needs
- Special thanks to the community

---

**Stay Safe. Stay Connected. 💪**
