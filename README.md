# Eternal Tower Saga - Pre-registration Platform

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql)

**Eternal Tower Saga** is a production-grade, full-stack pre-registration platform for a high-end MMORPG. It features a visually immersive landing page with parallax effects and a robust, modular Admin CMS for real-time content management and analytics.

This project demonstrates a **Server-First Architecture** using Next.js 14 App Router, ensuring optimal performance, SEO, and type safety.

---

## 📸 Screenshots

| Landing Page | Admin Dashboard |
|:---:|:---:|
| *(Place screenshot of Hero Section here)* | *(Place screenshot of Admin Dashboard here)* |

---

## 🚀 Key Features

### 🎮 User Facing (Landing Page)
*   **Immersive Visuals:** Full-screen parallax hero section with gradient overlays and floating particles (Framer Motion).
*   **Dynamic Theming:** The site's primary theme color and hero background can be updated instantly from the CMS without redeployment (CSS Variable Injection).
*   **Seamless Registration:** Optimized modal-based pre-registration flow with Zod validation.
*   **Responsive Design:** Mobile-first approach ensuring a premium experience across all devices.

### 🛠️ Admin Console (CMS)
*   **Modular Architecture:** Built with a strict separation of concerns using a fixed sidebar layout and modular widget components.
*   **Real-time Analytics:** Interactive charts (Recharts) visualizing user growth, traffic sources, and conversion rates.
*   **Content Management:** Update global site configuration (Meta Titles, Descriptions, Theme Colors) directly from the UI.
*   **User Management:** View, filter, and export registered users.
*   **Security:** Protected routes via NextAuth.js Middleware and Role-Based Access Control (RBAC).

---

## 🏗️ System Architecture

This project adheres to **Solid Software Engineering Fundamentals**:

1.  **Server Components & Actions:** Data fetching happens exclusively on the server (using Prisma), reducing client bundle size and exposing zero API secrets. Mutations are handled via Server Actions.
2.  **Strict Type Safety:** The codebase is 100% TypeScript. Database schemas are synchronized with TypeScript interfaces via Prisma, and API inputs are validated using Zod.
3.  **Dynamic Injection:** The `SiteConfig` is fetched at the root layout level and injected as CSS variables (`--primary`) into the document head, allowing for runtime theming with zero layout shift.
4.  **Client/Server Boundary:** Interactive elements (Charts, Modals) are isolated as Client Components (`'use client'`), while the page structure remains Server-Side Rendered.

---

## 💻 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/eternal-tower-saga.git
cd eternal-tower-saga
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file in the root directory:
```env
# Database Connection (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/eternal_tower_saga?schema=public"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key"
```

### 4. Database Setup
Push the schema to your database and seed the initial admin user:
```bash
npx prisma db push
npx tsx scripts/seed-admin.ts
```
*Default Admin Credentials:* `admin` / `admin123`

### 5. Run Development Server
```bash
npm run dev
```
Access the landing page at `http://localhost:3000` and the admin panel at `http://localhost:3000/admin`.

---

## 📂 Project Structure

```
src/
├── actions/        # Server Actions (Mutations)
├── app/            # Next.js App Router (Pages & Layouts)
│   ├── admin/      # Protected Admin Routes
│   │   ├── analytics/
│   │   ├── content/
│   │   └── users/
│   ├── api/        # API Routes (Auth)
│   └── page.tsx    # Landing Page
├── components/     # React Components
│   ├── admin/      # Admin-specific Widgets (Sidebar, Charts)
│   └── ui/         # Shadcn UI Components
├── lib/            # Utilities (Prisma Client, Utils)
└── scripts/        # Database Seed Scripts
```
