# plannify
Plannify – A modern, clutter-free app for organizing events, managing guests, and tracking who brings what.

# Plannify Backend

Plannify is a modern, clutter-free app for organizing events, tracking RSVPs, and managing who brings what. This repository contains the TypeScript backend code and API services.

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/kemal-rov/plannify.git
cd plannify
```

### 2. Install dependencies

```npm run install```

### 3. Copy .env file from 1password

Put it in the root of the project and make sure it includes all content saved on 1password.

### 4. Run project in dev

```npm run dev```

## Project structure

```bash
src/
  index.ts         # Entry point
  routes/          # API route definitions
  controllers/     # Business logic
  services/        # Firestore and auth integrations
  utils/           # Helper functions
  ```

## Requirements

- Node.js 18+
- GCP project with Firestore enabled
- Service account key not needed - using WIF *(impersonation details WIP)*

#### Contributors

Made with love by Fati, Kemal and Casper.