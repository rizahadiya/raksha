# Deployment Guide - Raksha

## Production Deployment

### Frontend Deployment Options

#### 1. **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm install -g vercel

# Build frontend
cd frontend
npm run build

# Deploy
cd ..
vercel
```

#### 2. **Netlify**
```bash
# Build
cd frontend
npm run build

# Drag & drop 'build' folder to Netlify
# Or use Netlify CLI:
yarn global add netlify-cli
netlify deploy --prod --dir=build
```

#### 3. **GitHub Pages**
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/raksha"

# Deploy
cd frontend
npm run build
gh-pages -d build
```

### Backend Deployment Options

#### 1. **Heroku**
```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create raksha-backend

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

#### 2. **Railway**
```bash
# Via Railway dashboard
# 1. Connect GitHub repo
# 2. Set environment variables
# 3. Auto-deploy on push
```

#### 3. **Render**
```bash
# Via Render dashboard
# 1. New Web Service from GitHub
# 2. Set build & start commands
# 3. Deploy
```

#### 4. **AWS EC2**
```bash
# SSH into instance
ssh -i key.pem ec2-user@your-instance

# Install Node.js
sudo yum install nodejs npm

# Clone & setup
git clone repo
cd raksha/backend
npm install
NODE_ENV=production npm start
```

### Database Setup

**SQLite (Development)**
- Auto-created at `backend/raksha.db`
- No configuration needed

**PostgreSQL (Production - Optional)**
```bash
# Install pg
npm install pg

# Update database.js to use PostgreSQL
# Add credentials to .env
```

### Environment Variables

**Backend .env**
```
PORT=5000
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host/raksha
JWT_SECRET=your-secret-key
```

**Frontend .env**
```
REACT_APP_API_URL=https://your-backend-url.com
REACT_APP_ENVIRONMENT=production
```

### SSL/HTTPS

**For production, always use HTTPS:**
- Vercel/Netlify: Automatic
- Heroku: Automatic
- AWS: Use AWS Certificate Manager
- Custom: Use Let's Encrypt (Certbot)

### Performance Optimization

**Frontend:**
```bash
# Build optimized bundle
npm run build

# Check bundle size
npm install -g webpack-bundle-analyzer
```

**Backend:**
- Enable caching
- Use connection pooling
- Implement rate limiting
- Set up monitoring

### Monitoring & Logging

**Frontend:**
- Sentry for error tracking
- Google Analytics for usage

**Backend:**
- Winston or Pino for logging
- PM2 for process management
- MongoDB Atlas or similar for logs

### CI/CD Pipeline

**GitHub Actions Example**
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - run: npm start
```

### Security Checklist

- [ ] Enable HTTPS
- [ ] Set secure headers (CORS, CSP)
- [ ] Use environment variables for secrets
- [ ] Validate all user inputs
- [ ] Rate limit API endpoints
- [ ] Keep dependencies updated
- [ ] Use WAF/DDoS protection
- [ ] Regular security audits
- [ ] Backup database regularly
- [ ] Monitor for suspicious activity

### Scaling

1. **Load Balancing**: Use AWS ELB or Nginx
2. **Database**: Scale to PostgreSQL/MongoDB
3. **Caching**: Implement Redis
4. **CDN**: CloudFlare for frontend assets
5. **Microservices**: Split backend into services

### Maintenance

- Monitor application health
- Regular database backups
- Update dependencies monthly
- Review logs for errors
- Performance optimization
- Feature updates & patches

---

For more deployment options, visit:
- Vercel: vercel.com
- Netlify: netlify.com
- Heroku: heroku.com
- Railway: railway.app
