# 🎯 Smart Habit Tracker

A beautiful, full-stack habit tracking app built with **Next.js 16**, **TypeScript**, **Prisma**, and **Tailwind CSS**. Track daily and weekly habits, build streaks, and gain insights into your progress!

## ✨ Features

- ✅ **Daily & Weekly Habits** - Track different cadences
- 🔥 **Streak Tracking** - See your current and best streaks
- 📊 **Insights Dashboard** - View completion rates and statistics
- 🌏 **Timezone-Aware** - Uses Asia/Manila timezone
- 🎨 **Beautiful UI** - Tailwind CSS with smooth animations
- ⚡ **Server Actions** - Fast, type-safe mutations with React 19
- 🧪 **Tested** - Streak logic covered with Vitest tests

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Database:** SQLite with Prisma ORM
- **Styling:** Tailwind CSS v4
- **Validation:** Zod
- **Testing:** Vitest
- **Date Handling:** date-fns & date-fns-tz

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Romeo-04/smart-habit-tracker.git
cd smart-habit-tracker

# Install dependencies
npm install

# Set up environment variables
# Create .env file with:
DATABASE_URL="file:C:/Users/YourName/Documents/Smart-Habit-Tracker/smart-habit-tracker/prisma/dev.db"

# Generate Prisma client
npm run generate

# Run database migrations
npm run migrate

# Seed the database with sample habits
npm run seed
```

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## 📁 Project Structure

```
app/
├── page.tsx                    # Homepage with habit list
├── insights/
│   └── page.tsx               # Insights & stats page
├── actions/
│   ├── toggleLog.ts           # Server action to toggle habits
│   └── createHabit.ts         # Server action to create habits
└── _components/
    └── CreateHabitForm.tsx    # Client component for form

lib/
├── day.ts                     # Timezone utilities (Manila)
├── streak.ts                  # Streak calculation logic
└── streak.test.ts             # Vitest tests

prisma/
├── schema.prisma              # Database schema
└── seed.ts                    # Seed script
```

## 🧪 Testing

Run tests:

```bash
npm test
```

## 🎓 What I Learned

- **Server Components vs Client Components** - When to use each
- **Server Actions** - Type-safe mutations without API routes
- **Prisma ORM** - Schema design with unique constraints
- **Timezone Handling** - Using date-fns-tz for consistent dates
- **Streak Algorithms** - Daily and weekly streak calculations
- **Test-Driven Development** - Writing tests first with Vitest
- **Zod Validation** - Type-safe form validation
- **Progressive Enhancement** - Forms work without JavaScript

## 🚀 Deployment

Ready to deploy to production? See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Deploy with Vercel:**
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Add Vercel Postgres database
4. Deploy! 🎉

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Romeo-04/smart-habit-tracker)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
