# 💸 Split AI

**Split smarter. Spend better.**

**Split AI** is a modern, AI-powered web application designed to make bill splitting effortless, transparent, and smart.  
Whether you're dining out with friends or managing shared expenses, Split AI helps you **split, calculate, and send bills seamlessly** — all in a beautiful, fast, and secure interface.

---

## 🚀 Tech Stack

| Category | Technology | Description |
|-----------|-------------|-------------|
| **Frontend** | [Next.js](https://nextjs.org/) | React-based framework for building performant and scalable UIs |
| **Backend** | [Convex](https://convex.dev/) | Real-time backend for data storage, queries, and serverless functions |
| **Automation** | [Inngest](https://www.inngest.com/) | For background jobs, async event handling, and workflows |
| **Authentication** | [Clerk](https://clerk.com/) | Secure user authentication and management |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean and modern icon set for UI consistency |
| **Email Service** | [Resend](https://resend.com/) | For sending transactional and notification emails |
| **Validation** | [Zod](https://zod.dev/) | Schema validation and type-safe data parsing |
| **Scheduler** | [Cron Jobs](https://crontab.guru/) | Used to trigger scheduled jobs and cleanup tasks |
| **UI Notifications** | [Sonner](https://sonner.emilkowal.ski/) | Beautiful toast notifications for better UX |
| **Loaders / Spinners** | [React Spinners](https://www.davidhu.io/react-spinners/) | Smooth and minimal loading animations |

---

## 🧠 Features

✅ **AI-powered bill splitting** – Automatically calculate who owes whom and how much.  
✅ **Real-time updates** – Powered by Convex for live data sync.  
✅ **Secure authentication** – Sign in with Clerk for seamless access.  
✅ **Automated email notifications** – Powered by Resend and Inngest.  
✅ **Smart scheduling** – Background jobs for periodic reminders and cleanup.  
✅ **Responsive UI** – Built with Next.js and styled for all devices.  
✅ **Smooth UX** – Sonner toasts and React Spinners for delightful interactions.  

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/aryangupta02092002/Split-Ai.git
cd Split-Ai
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
```bash
Create a .env.local file in the root directory and add your credentials:

env
CONVEX_DEPLOYMENT=your_convex_url
NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_CLERK_SIGN_IN_URL=sign_in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=sign_up
CLERK_JWT_ISSUER_DOMAIN=your_clerk_jwt_domain
RESEND_API_KEY=your_resend_key
GEMINI_API_KEY=your_gemini_key

```

### 4. Run the development server
```bash
npm run dev (Visit the app at http://localhost:3000 🚀)

npx convex dev (For backend-convex development server)

npx inngest-cli@latest dev (For inngest server startup)

npx convex run seed:seedDatabase (For seed data)
```

### 📅 Cron Jobs & Scheduled Tasks
Split AI uses cron-scheduled jobs (via Convex and Inngest) for:

- Sending reminder emails
- Cleaning up expired sessions
- Running periodic data syncs

### 📬 Email Workflows
All transactional and reminder emails are powered by Resend and triggered via Inngest workflows.

### 🧩 Folder Structure
```perl
Copy code
split-ai/
│
├── app/                 # Next.js app router and page components
├── components/          # Reusable React UI components
├── convex/              # Convex backend functions & schema definitions
├── hooks/               # Custom React hooks for data fetching, session handling, and UI logic
├── lib/                 # Helper functions and utilities
└── public/              # Static assets (images, icons, etc.)
```

### 🧪 Validation & Type Safety
All forms and inputs are validated using Zod, ensuring strong type safety and secure data flow between frontend and backend.

### 🧠 Future Enhancements
- 🤖 Add AI-driven expense suggestions
- 💬 Integration with WhatsApp for sending bills
- 📱 Mobile-first UI improvements


### 👨‍💻 Developer
Aryan Gupta
- 💼 Application Developer 
- 📧 [**Connect on LinkedIn**](https://www.linkedin.com/in/aryan-gupta-1bb108192/)
- 🌐 [**GitHub**](https://github.com/aryangupta02092002)

🪪 License
This project is licensed under the MIT License – feel free to use and modify it.