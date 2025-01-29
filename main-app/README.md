# Micro-Frontend Architecture using Vite

## Overview

This project demonstrates a **micro-frontend architecture** using **Vite**. It consists of a **main application (host)** that dynamically loads two **micro-frontends (chat-app and email-app)**. Additionally, there is a **shared-components** module that provides common components like Button and Card.

---

## Tools and Frameworks Used

### **Tech Stack:**

- **Vite** - Fast build tool for frontend development.
- **React** - For building UI components.
- **Module Federation** - For integrating micro-frontends.
- **React Router** - For navigation between pages.
- **Bootstrap** - For styling and responsive UI.

---

## Folder Structure

```
micro-frontend-vite/
│── main-app/         (Host Application - Vite)
│── chat-app/         (Micro-Frontend 1 - Vite)
│── email-app/        (Micro-Frontend 2 - Vite)
│── shared-components/ (Common UI Components - Vite)
```

---

## How to Set Up and Run the Application

### **1. Clone the Repository**

```bash
git clone <repo-url>
cd micro-frontend-vite
```

### **2. Install Dependencies**

Install **node_modules** inside each application.

```bash
cd main-app && npm install
cd ../chat-app && npm install
cd ../email-app && npm install
cd ../shared-components && npm install
```

### **3. Configure Module Federation**

Ensure `vite.config.js` in each project is correctly configured. Example for `shared-components`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "sharedComponents",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.jsx",
        "./Card": "./src/components/Card.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
});
```

Repeat this setup for `main-app`, `chat-app`, and `email-app`, adjusting names and exposes as needed.

### **4. Start the Applications**

Run each app in a separate terminal.

```bash
cd shared-components && npm run dev
cd ../chat-app && npm run dev
cd ../email-app && npm run dev
cd ../main-app && npm run dev
```

**Note:** Ensure the following ports are used:

- **Main App:** `http://localhost:3000`
- **Chat App:** `http://localhost:3001`
- **Email App:** `http://localhost:3002`
- **Shared Components:** `http://localhost:3003`

---

## Key Architectural Decisions & Trade-offs

### **1. Why Vite?**

- Vite is fast and speeds up development.
- Works well with Module Federation.

### **2. Why Module Federation?**

- Makes integrating micro-frontends easier.
- Allows different teams to develop and deploy services independently.

### **3. Trade-offs**

- Managing multiple applications can be complex.
- Dynamic imports may cause slight delays due to **lazy loading**.

---

## Challenges Faced & Solutions

### **1. Remote Module Not Found Error**

**Issue:** `Failed to fetch dynamically imported module: remoteEntry.js`
**Solution:** Ensure `remoteEntry.js` is correctly loaded on the right port and properly exposed in `vite.config.js`.

### **2. Button Component Not Loading**

**Issue:** The `shared-components` Button and Card were not importing.
**Solution:** Properly exposed them in `vite.config.js` and correctly imported them in `main-app` using `React.lazy`.

### **3. Routing Issues**

**Issue:** Micro-frontends were not loading properly with React Router.
**Solution:** Wrapped them inside `BrowserRouter` and used `Suspense` for lazy loading.

---

## Future Improvements

- Add authentication system.
- Include more micro-frontends.
- Improve state management.
- Optimize lazy loading for performance.

---

If you have any issues, feel free to ask for help! 🚀
