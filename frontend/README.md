# Raksha Frontend

React-based frontend for Raksha women safety application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in browser

## Build for Production

```bash
npm run build
```

## Features

### Pages

1. **SOS Button (Home)**
   - Primary emergency trigger
   - Real-time location display
   - 10-second countdown confirmation
   - Maps link generation
   - Cancel functionality

2. **Emergency Contacts**
   - Add/edit/delete contacts
   - Set primary contact
   - Manage contact relationships
   - Phone number validation

3. **Alert History**
   - View all past SOS alerts
   - Status monitoring
   - Location details
   - Timestamp tracking

## Component Structure

```
src/
├── components/
│   ├── SOSButton.js         # Main SOS trigger
│   ├── EmergencyContacts.js # Contact management
│   ├── SOSHistory.js        # Alert history
│   └── Navigation.js        # Bottom navigation
├── pages/
│   └── (page components)
├── styles/
│   ├── SOSButton.css
│   ├── EmergencyContacts.css
│   ├── SOSHistory.css
│   ├── Navigation.css
│   └── App.css
├── App.js                   # Main app component
└── index.js                 # React entry point
```

## Browser APIs Used

- **Geolocation API**: Real-time location tracking
- **Vibration API**: Haptic feedback on SOS trigger
- **Fetch API**: HTTP requests via Axios
- **Local Storage**: (Can be added for preferences)

## Environment Variables

Create `.env` file in frontend root:
```
REACT_APP_API_URL=http://localhost:5000
```

## Styling

- Dark theme optimized for visibility
- Responsive design (mobile-first)
- CSS animations and transitions
- Grid layout for contact cards
- Flexbox for component alignment

## Performance

- Code splitting ready
- Lazy loading support
- Optimized re-renders
- Minimal dependencies

## Accessibility

- Semantic HTML
- ARIA labels ready
- Keyboard navigation support
- Color contrast compliance

## Testing

To add tests:
```bash
npm test
```

## Deployment

1. Build production bundle:
```bash
npm run build
```

2. Deploy `build/` folder to:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Firebase Hosting

Example for Vercel:
```bash
npm install -g vercel
vercel
```

## Troubleshooting

**API not connecting?**
- Ensure backend is running on port 5000
- Check CORS settings in backend
- Verify API URLs in Axios calls

**Location not working?**
- Enable location permission in browser
- Check privacy settings
- Use HTTPS (required for production)

**Styling issues?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file paths
- Ensure dark theme is supported

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

- [ ] Push notifications
- [ ] Dark/Light theme toggle
- [ ] Shake detection for trigger
- [ ] Video recording on SOS
- [ ] Real-time police integration
- [ ] Multi-language support
- [ ] Offline functionality
- [ ] Social media sharing
