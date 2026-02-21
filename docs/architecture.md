# Architecture Diagram

This document provides a high-level overview of Raksha's architecture.

```
[Browser (React)] <--HTTP/HTTPS--> [Express Backend]
       |                             |
       |-- Geolocation API           |-- SQLite Database
       |-- Google Maps               |-- RESTful Endpoints

```

The frontend communicates with the backend via REST APIs. The backend handles SOS alerts, contact management, and location sharing, storing data in an SQLite database. The frontend uses browser APIs for geolocation and interacts with Google Maps for displaying locations.
