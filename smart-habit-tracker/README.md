# 🎯 TrackHab - Smart Habit Tracker

**TrackHab** is a modern, full-stack habit tracking application that helps you build lasting habits through intelligent streak tracking, beautiful visualizations, and comprehensive insights. Built with cutting-edge technologies for a seamless user experience.

## 📖 About

TrackHab transforms the way you build and maintain habits by providing an intuitive platform where you can:

- **Track Progress**: Monitor daily and weekly habits with real-time completion tracking
- **Build Streaks**: Stay motivated with intelligent streak calculations and visual progress indicators
- **Gain Insights**: Analyze your performance with detailed statistics, heatmaps, and completion rates
- **Stay Motivated**: Get inspired with motivational quotes and satisfying visual feedback

The application is designed with productivity in mind, featuring a clean interface, timezone awareness, and robust data persistence to ensure your habit tracking journey is both enjoyable and effective.

## ✨ Features

### 🏆 Core Functionality
- **Multi-Cadence Habits** - Create and track both daily and weekly habits
- **Intelligent Streak Tracking** - Real-time current and best streak calculations
- **Quick Habit Toggle** - One-click habit completion with instant feedback
- **Habit Management** - Create, edit, and delete habits with form validation

### 📊 Analytics & Insights  
- **Interactive Dashboard** - Visual overview of all habits and progress
- **Comprehensive Stats** - Completion rates, streak analysis, and performance metrics
- **Habit Heatmap** - GitHub-style activity visualization showing consistency patterns
- **Progress Tracking** - Real-time progress bars and completion indicators

### 🎨 User Experience
- **Modern UI** - Clean, responsive design with Tailwind CSS and smooth animations
- **Dark/Light Theme** - Toggle between themes with persistent preference storage
- **Motivational Elements** - Dynamic quotes and celebratory confetti on achievements
- **Timezone Support** - Intelligent timezone handling (Asia/Manila) for accurate daily tracking

### 🔒 Authentication & Security
- **NextAuth.js Integration** - Secure authentication with multiple provider support
- **User Isolation** - Personal habit data with secure user sessions
- **Data Protection** - Server-side validation and secure database operations

### ⚡ Performance & Development
- **Server Actions** - Type-safe mutations with Next.js Server Actions
- **Optimistic Updates** - Instant UI feedback with background synchronization  
- **Testing Coverage** - Comprehensive tests for streak calculation logic
- **TypeScript** - Full type safety throughout the application

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router with React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Tailwind Animate
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives with custom styling

### Backend & Database
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js v5 (Beta)
- **Validation**: Zod for schema validation
- **Server Actions**: Native Next.js Server Actions

### Development & Testing  
- **Testing**: Vitest with UI runner
- **Build Tools**: ESLint 9, PostCSS, TypeScript 5
- **Date Handling**: date-fns & date-fns-tz for timezone support
- **Development**: Hot reload, TypeScript strict mode

### Deployment & DevOps
- **Platform**: Optimized for Vercel deployment
- **Database**: PostgreSQL (production) / SQLite (development)
- **Environment**: Dockerizable with environment-based configuration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (or SQLite for local development)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/smart-habit-tracker.git
   cd smart-habit-tracker/smart-habit-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/habit_tracker"
   # For local development with SQLite:
   # DATABASE_URL="file:./prisma/dev.db"

   # NextAuth.js
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Add your authentication providers (Google, GitHub, etc.)
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   
   # Optional: Seed with sample data
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see TrackHab in action!

## 📁 Project Structure

```
smart-habit-tracker/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Landing page
│   ├── dashboard/               # Main habit tracking dashboard
│   │   └── page.tsx
│   ├── insights/                # Analytics and statistics
│   │   └── page.tsx
│   ├── auth/                    # Authentication pages
│   │   ├── signin/page.tsx
│   │   └── error/page.tsx
│   ├── api/auth/[...nextauth]/  # NextAuth.js API routes
│   ├── actions/                 # Server Actions
│   │   ├── createHabit.ts
│   │   ├── deleteHabit.ts
│   │   └── toggleLog.ts
│   └── _components/             # Shared React components
│       ├── CreateHabitForm.tsx
│       ├── HabitHeatmap.tsx
│       ├── ProgressBar.tsx
│       └── ...
├── components/ui/               # Reusable UI components
├── lib/                         # Utility functions and logic
│   ├── db.ts                   # Database client
│   ├── streak.ts               # Streak calculation logic
│   ├── day.ts                  # Timezone utilities
│   └── utils.ts                # General utilities
├── prisma/                      # Database schema and migrations
│   ├── schema.prisma
│   └── migrations/
└── public/                      # Static assets
```

## 🧪 Testing

Run the test suite:
```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui
```

The project includes comprehensive tests for:
- Streak calculation algorithms
- Date handling and timezone logic
- Habit creation and validation

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy with automatic builds on push

### Manual Deployment
1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org) and [React](https://reactjs.org)
- UI components powered by [Radix UI](https://radix-ui.com)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Database management via [Prisma](https://prisma.io)
- Authentication by [NextAuth.js](https://next-auth.js.org)

---

**Start building better habits today with TrackHab!** 🌟

Run tests:

```bash
npm test
```

## What I Learned

-   **Server Components vs Client Components** - When to use each
-   **Server Actions** - Type-safe mutations without API routes
-   **Prisma ORM** - Schema design with unique constraints
-   **Timezone Handling** - Using date-fns-tz for consistent dates
-   **Streak Algorithms** - Daily and weekly streak calculations
-   **Test-Driven Development** - Writing tests first with Vitest
-   **Zod Validation** - Type-safe form validation
-   **Progressive Enhancement** - Forms work without JavaScript

## Deployment

Ready to deploy to production? See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Deploy with Vercel:**

1.  Push to GitHub
2.  Import on [vercel.com](https://vercel.com)
3.  Add Vercel Postgres database
4.  Deploy! 🎉

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Romeo-04/smart-habit-tracker)

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.