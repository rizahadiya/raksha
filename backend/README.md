# Raksha Backend API

Express.js backend server for Raksha women safety application.

## Environment Variables

Create `.env` file:
```
PORT=5000
NODE_ENV=development
```

## Running the Backend

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

## API Documentation

### Base URL
`http://localhost:5000`

### SOS Endpoints

#### Trigger SOS
**POST** `/api/sos/trigger`

Request:
```json
{
  "latitude": 28.7041,
  "longitude": 77.1025,
  "triggerType": "button"
}
```

Response:
```json
{
  "success": true,
  "alertId": "uuid",
  "mapsLink": "https://google.com/maps?q=...",
  "contactsNotified": 2,
  "message": "🚨 SOS triggered! 2 contacts notified."
}
```

#### Get SOS History
**GET** `/api/sos/history`

Response:
```json
[
  {
    "id": "uuid",
    "trigger_type": "button",
    "latitude": 28.7041,
    "longitude": 77.1025,
    "maps_link": "https://...",
    "created_at": "2024-01-15 10:30:45",
    "status": "active"
  }
]
```

#### Cancel SOS
**POST** `/api/sos/cancel/:id`

Response:
```json
{
  "success": true,
  "message": "SOS cancelled"
}
```

### Contact Endpoints

#### Get All Contacts
**GET** `/api/contacts`

#### Add Contact
**POST** `/api/contacts`

Request:
```json
{
  "name": "Mom",
  "phone": "+91-9876543210",
  "relationship": "Mother"
}
```

#### Update Contact
**PUT** `/api/contacts/:id`

#### Delete Contact
**DELETE** `/api/contacts/:id`

#### Set Primary Contact
**POST** `/api/contacts/:id/primary`

### Location Endpoints

#### Get Maps Link
**POST** `/api/location/maps-link`

Request:
```json
{
  "latitude": 28.7041,
  "longitude": 77.1025
}
```

Response:
```json
{
  "success": true,
  "mapsLink": "https://google.com/maps?q=...",
  "message": "🆘 EMERGENCY! I need help!...",
  "whatsappLink": "https://wa.me/?text=...",
  "telegramLink": "https://t.me/share/url?url=..."
}
```

## Database Schema

### emergency_contacts
- id (INTEGER PRIMARY KEY)
- name (TEXT)
- phone (TEXT)
- relationship (TEXT)
- is_primary (BOOLEAN)
- created_at (DATETIME)

### sos_alerts
- id (TEXT PRIMARY KEY)
- trigger_type (TEXT)
- latitude (REAL)
- longitude (REAL)
- maps_link (TEXT)
- created_at (DATETIME)
- status (TEXT)

### alert_recipients
- id (INTEGER PRIMARY KEY)
- alert_id (TEXT FOREIGN KEY)
- contact_id (INTEGER FOREIGN KEY)
- sent_at (DATETIME)
- delivery_status (TEXT)

## Troubleshooting

**Database not initializing?**
```bash
rm backend/raksha.db  # Delete old database
npm run dev           # Recreate
```

**Port 5000 already in use?**
```bash
PORT=5001 npm run dev
```

**Dependencies missing?**
```bash
npm install
```
