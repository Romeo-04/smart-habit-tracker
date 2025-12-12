# Smart Habit Tracker - Complete Technical Documentation

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [System Architecture](#2-system-architecture)
3. [Technology Stack](#3-technology-stack)
4. [Database Schema](#4-database-schema)
5. [Authentication System](#5-authentication-system)
6. [Server Actions API](#6-server-actions-api)
7. [Components Documentation](#7-components-documentation)
8. [Pages & Routes](#8-pages--routes)
9. [Features](#9-features)
10. [Styling Guide](#10-styling-guide)
11. [Setup & Installation](#11-setup--installation)
12. [Environment Variables](#12-environment-variables)
13. [Deployment](#13-deployment)
14. [Testing](#14-testing)
15. [Troubleshooting](#15-troubleshooting)

---

## 1. Project Overview

**Smart Habit Tracker** is a full-stack web application built with Next.js 16 that helps users build and maintain habits through:

- **Habit Management**: Create and track daily or weekly habits
- **Streak Tracking**: Visual feedback on current and longest streaks
- **Insights Dashboard**: Detailed analytics with completion rates and heatmaps
- **Gamification**: Confetti animations, motivational quotes, and progress bars
- **Pixel-Art Aesthetic**: Retro design with Press Start 2P font and pixel graphics

**Key Features:**
- ✅ Daily and weekly habit tracking
- 🔥 Current and historical streak calculations
- 📊 12-week GitHub-style heatmap calendar
- 💬 Daily motivational quotes
- 🎉 Confetti animations on completion
- 📈 Progress tracking with completion percentages
- 🌙 Dark mode support
- ➕ Quick add floating action button

---

## 2. System Architecture

### Application Structure

```
Smart Habit Tracker/
├── app/                      # Next.js App Router
│   ├── page.tsx              # Landing page (public)
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── dashboard/            # Protected dashboard
│   │   └── page.tsx
│   ├── insights/             # Analytics page
│   │   └── page.tsx
│   ├── auth/                 # Authentication pages
│   │   ├── signin/page.tsx
│   │   └── error/page.tsx
│   ├── api/auth/[...nextauth]/  # NextAuth API routes
│   │   └── route.ts
│   ├── actions/              # Server Actions
│   │   ├── createHabit.ts
│   │   ├── toggleLog.ts
│   │   └── deleteHabit.ts
│   └── _components/          # React components
│       ├── Confetti.tsx
│       ├── MotivationQuote.tsx
│       ├── ProgressBar.tsx
│       ├── HabitHeatmap.tsx
│       ├── QuickAddButton.tsx
│       ├── ThemeToggle.tsx
│       ├── CreateHabitForm.tsx
│       ├── DeleteHabitButton.tsx
│       ├── HabitToggleWrapper.tsx
│       └── Container.tsx
├── components/ui/            # Shadcn UI components
│   ├── button.tsx
│   └── card.tsx
├── lib/                      # Utility functions
│   ├── db.ts                 # Prisma client
│   ├── day.ts                # Timezone utilities
│   ├── streak.ts             # Streak calculations
│   ├── streak.test.ts        # Vitest tests
│   └── utils.ts              # Class utility (cn)
├── prisma/                   # Database
│   ├── schema.prisma         # Database schema
│   └── migrations/           # Migration files
├── public/                   # Static assets
│   ├── logo.png
│   └── images/
│       ├── mountain-bg.png
│       ├── goals-icon.png
│       ├── streaks-icon.png
│       ├── insights-icon.png
│       └── cta-bg.png
├── auth.ts                   # NextAuth configuration
├── middleware.ts             # Route protection
├── components.json           # Shadcn config
├── tailwind.config.ts        # Tailwind config
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

### Data Flow Architecture

```
User Browser
    ↓
Landing Page (/) ──────────> Auth (Google OAuth)
                                      ↓
                              Dashboard (/dashboard)
                                      ↓
                        ┌──────────────┴──────────────┐
                        ↓                             ↓
                  Server Actions              Insights (/insights)
                  (createHabit,                      ↓
                   toggleLog,                   Heatmaps
                   deleteHabit)                 Statistics
                        ↓
                  Prisma ORM
                        ↓
                  PostgreSQL Database
```

### Rendering Strategy

- **Landing Page**: Server Component (SSR)
- **Dashboard**: Server Component with dynamic rendering (`force-dynamic`)
- **Insights**: Server Component with dynamic rendering
- **Client Components**: Marked with `'use client'` directive
  - Confetti, MotivationQuote, ProgressBar, ThemeToggle
  - CreateHabitForm, QuickAddButton, HabitToggleWrapper

---

## 3. Technology Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.1 | React framework with App Router |
| **React** | 19.2.0 | UI library with Server Components |
| **TypeScript** | 5.x | Type-safe development |

### Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | v4 | Utility-first CSS framework |
| **tailwindcss-animate** | 1.0.7 | Animation utilities |
| **Press Start 2P** | Font | Pixel-art aesthetic font |
| **Shadcn UI** | Latest | Pre-built component library |

### Database & ORM

| Technology | Version | Purpose |
|------------|---------|---------|
| **Prisma** | 6.19.0 | Type-safe ORM |
| **PostgreSQL** | Latest | Relational database (Vercel) |
| **@prisma/client** | 6.19.0 | Database client |

### Authentication

| Technology | Version | Purpose |
|------------|---------|---------|
| **NextAuth.js** | 5.0.0-beta.30 | Authentication library |
| **Google OAuth** | - | OAuth provider |

### Validation & Utilities

| Technology | Version | Purpose |
|------------|---------|---------|
| **Zod** | 4.1.12 | Schema validation |
| **date-fns** | 4.1.0 | Date manipulation |
| **date-fns-tz** | 3.2.0 | Timezone support |
| **clsx** | 2.1.1 | Conditional classes |
| **tailwind-merge** | 3.4.0 | Merge Tailwind classes |

### Testing

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vitest** | 4.0.8 | Unit testing framework |
| **@vitest/ui** | 4.0.8 | Vitest UI dashboard |

### UI Components

| Technology | Version | Purpose |
|------------|---------|---------|
| **@radix-ui/react-slot** | 1.2.4 | Slot component primitive |
| **class-variance-authority** | 0.7.1 | Variant styling |
| **lucide-react** | 0.556.0 | Icon library |

---

## 4. Database Schema

### Entity Relationship Diagram

```
┌─────────────────┐
│      User       │
├─────────────────┤
│ id (cuid)       │ PK
│ email (unique)  │
│ name            │
│ createdAt       │
│ updatedAt       │
└────────┬────────┘
         │ 1:N
         ↓
┌─────────────────┐
│      Habit      │
├─────────────────┤
│ id (cuid)       │ PK
│ userId          │ FK → User.id
│ title           │
│ cadence         │ ENUM (daily|weekly)
│ targetPerWeek   │ INT (default: 7)
│ createdAt       │
└────────┬────────┘
         │ 1:N
         ↓
┌─────────────────┐
│   HabitLog      │
├─────────────────┤
│ id (cuid)       │ PK
│ habitId         │ FK → Habit.id
│ dayLocal        │ STRING (YYYY-MM-DD)
│ createdAt       │
└─────────────────┘
UNIQUE (habitId, dayLocal)
```

### Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "rhel-openssl-3.0.x"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Cadence {
  daily
  weekly
}

model User {
  id        String   @id @default(cuid())
  name      String?
  email     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now()) @updatedAt
  habits    Habit[]
}

model Habit {
  id            String     @id @default(cuid())
  userId        String
  user          User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  title         String
  cadence       Cadence    @default(daily)
  targetPerWeek Int        @default(7)
  createdAt     DateTime   @default(now())
  logs          HabitLog[]
  
  @@index([userId, createdAt])
}

model HabitLog {
  id        String   @id @default(cuid())
  habitId   String
  habit     Habit    @relation(fields: [habitId], references: [id], onDelete: Cascade)
  dayLocal  String   // 'YYYY-MM-DD' in Asia/Manila timezone
  createdAt DateTime @default(now())
  
  @@unique([habitId, dayLocal])
  @@index([dayLocal])
  @@index([habitId, dayLocal])
}
```

### Key Design Decisions

1. **CUID IDs**: Using `cuid()` for globally unique, URL-safe identifiers
2. **Cascade Deletes**: User deletion cascades to Habits → HabitLogs
3. **Timezone Handling**: `dayLocal` stores date as string in Asia/Manila timezone
4. **Unique Constraint**: Prevents duplicate logs for the same habit on the same day
5. **Indexing**: Optimized for queries on `userId`, `createdAt`, and `dayLocal`

---

## 5. Authentication System

### NextAuth.js v5 Configuration

**File:** `auth.ts`

```typescript
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      checks: ["none"], // Disable PKCE for Vercel serverless
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  useSecureCookies: process.env.NODE_ENV === "production",
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      
      // Upsert user in database
      const dbUser = await prisma.user.upsert({
        where: { email: user.email },
        update: { name: user.name },
        create: {
          email: user.email,
          name: user.name,
        },
      });
      
      user.id = dbUser.id;
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  trustHost: true,
});
```

### Authentication Flow

1. **User clicks "Sign in with Google"** → Redirects to Google OAuth
2. **Google authorization** → Returns to `/api/auth/callback/google`
3. **signIn callback** → Upserts user to database
4. **JWT token created** → Contains user ID, email, name
5. **Session established** → User redirected to `/dashboard`

### Protected Routes

**File:** `middleware.ts`

```typescript
import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

**Note:** Middleware is simplified. Auth checks happen in individual pages using `await auth()`.

### Session Check Example

```typescript
// In any Server Component
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await auth();
  
  if (!session?.user?.email) {
    redirect("/auth/signin");
  }
  
  // User is authenticated
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  
  // ... rest of page
}
```

---

## 6. Server Actions API

Server Actions provide type-safe, server-side mutations without API routes.

### createHabit

**File:** `app/actions/createHabit.ts`

```typescript
"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";

const prisma = new PrismaClient();

const createHabitSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  cadence: z.enum(["daily", "weekly"]),
  targetPerWeek: z.coerce.number().int().min(1).max(7),
});

export type FormState = {
  error?: string;
  success?: boolean;
};

export async function createHabit(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const rawData = {
      title: formData.get("title"),
      cadence: formData.get("cadence"),
      targetPerWeek: formData.get("targetPerWeek"),
    };

    const validated = createHabitSchema.parse(rawData);

    const session = await auth();
    if (!session?.user?.email) {
      return { error: "You must be logged in to create habits" };
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return { error: "User not found" };
    }

    await prisma.habit.create({
      data: {
        userId: user.id,
        title: validated.title,
        cadence: validated.cadence,
        targetPerWeek: validated.targetPerWeek,
      },
    });

    revalidatePath("/");
    revalidatePath("/insights");

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: error.issues[0].message };
    }
    return { error: "Failed to create habit. Please try again." };
  }
}
```

**Usage:**

```typescript
// In a Client Component
import { useActionState } from "react";
import { createHabit } from "../actions/createHabit";

const [state, formAction, isPending] = useActionState(createHabit, {});

<form action={formAction}>
  <input name="title" />
  <select name="cadence">
    <option value="daily">Daily</option>
    <option value="weekly">Weekly</option>
  </select>
  <input name="targetPerWeek" type="number" />
  <button type="submit">Create</button>
</form>
```

### toggleLog

**File:** `app/actions/toggleLog.ts`

```typescript
"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";
import { todayInManila } from "@/lib/day";

const prisma = new PrismaClient();

export async function toggleLog(habitId: string) {
  const dayLocal = todayInManila();

  const existing = await prisma.habitLog.findUnique({
    where: { habitId_dayLocal: { habitId, dayLocal } },
  });

  if (existing) {
    await prisma.habitLog.delete({ where: { id: existing.id } });
  } else {
    await prisma.habitLog.create({ data: { habitId, dayLocal } });
  }

  revalidatePath("/");
  revalidatePath("/insights");
}
```

**Usage:**

```typescript
// In a Server Component
<form action={toggleLog.bind(null, habit.id)}>
  <button type="submit">Toggle Habit</button>
</form>
```

### deleteHabit

**File:** `app/actions/deleteHabit.ts`

```typescript
"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteHabit(habitId: string) {
  try {
    await prisma.habitLog.deleteMany({ where: { habitId } });
    await prisma.habit.delete({ where: { id: habitId } });
    
    revalidatePath("/");
    revalidatePath("/insights");
  } catch (error) {
    console.error("Failed to delete habit:", error);
  }
}
```

---

## 7. Components Documentation

### Confetti Component

**File:** `app/_components/Confetti.tsx`

Displays animated confetti particles when a habit is completed.

```typescript
'use client';

interface ConfettiProps {
  trigger: boolean;
}

export function Confetti({ trigger }: ConfettiProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    rotation: number;
    scale: number;
  }>>([]);

  useEffect(() => {
    if (!trigger) return;

    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * -100 - 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
    }));

    setParticles(newParticles);

    const timer = setTimeout(() => setParticles([]), 1000);
    return () => clearTimeout(timer);
  }, [trigger]);

  // ... render particles
}
```

**Features:**
- 30 colored particles with random trajectories
- CSS keyframe animation for falling effect
- Auto-clears after 1 second
- Fixed positioning with z-index 50

### MotivationQuote Component

**File:** `app/_components/MotivationQuote.tsx`

Displays a rotating motivational quote that changes daily.

```typescript
'use client';

const quotes = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  // ... 9 more quotes
];

export function MotivationQuote() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const today = new Date().toDateString();
    const hash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const quoteIndex = hash % quotes.length;
    setQuote(quotes[quoteIndex]);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white shadow-lg mb-6">
      <p className="text-lg font-medium italic">"{quote.text}"</p>
      <p className="text-sm opacity-90">— {quote.author}</p>
    </div>
  );
}
```

**Features:**
- 10 motivational quotes
- Deterministic selection based on date hash
- Same quote shown throughout the day
- Purple-pink gradient background

### ProgressBar Component

**File:** `app/_components/ProgressBar.tsx`

Shows today's habit completion percentage with color coding.

```typescript
interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  const getColor = () => {
    if (percentage === 100) return 'bg-green-500';
    if (percentage >= 70) return 'bg-blue-500';
    if (percentage >= 40) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  const getMessage = () => {
    if (percentage === 100) return '🎉 All habits completed!';
    if (percentage >= 70) return '💪 Great progress!';
    if (percentage >= 40) return '👍 Keep going!';
    if (percentage > 0) return '🌱 Good start!';
    return '📝 Start your day!';
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-md">
      <div className="flex items-center justify-between mb-3">
        <h3>Today's Progress</h3>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div className={`h-full ${getColor()}`} style={{ width: `${percentage}%` }} />
      </div>
      <div className="flex justify-between text-sm">
        <span>{completed} of {total} habits</span>
        <span>{getMessage()}</span>
      </div>
    </div>
  );
}
```

**Color Coding:**
- Green (100%): All habits completed
- Blue (70-99%): Great progress
- Yellow (40-69%): Keep going
- Gray (0-39%): Start your day

### HabitHeatmap Component

**File:** `app/_components/HabitHeatmap.tsx`

GitHub-style 12-week calendar heatmap showing habit completion history.

```typescript
interface HabitHeatmapProps {
  logs: string[]; // Array of 'YYYY-MM-DD' dates
  habitTitle: string;
}

export function HabitHeatmap({ logs, habitTitle }: HabitHeatmapProps) {
  const today = new Date();
  const days = Array.from({ length: 84 }, (_, i) => {
    const date = subDays(today, 83 - i);
    return format(date, 'yyyy-MM-dd');
  });

  const weeks: string[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div>
      <h3>{habitTitle} - Last 12 Weeks</h3>
      <div className="flex gap-1">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day) => (
              <div
                key={day}
                className={`w-3 h-3 rounded-sm ${
                  logs.includes(day) ? 'bg-green-500' : 'bg-gray-200'
                }`}
                title={day}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
```

**Features:**
- 84 days (12 weeks) visualization
- Green squares for completed days
- Gray squares for missed days
- Tooltip showing date on hover

### QuickAddButton Component

**File:** `app/_components/QuickAddButton.tsx`

Floating action button that opens a modal with the CreateHabitForm.

```typescript
'use client';

export function QuickAddButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
      >
        <svg>+ icon</svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="bg-white rounded-2xl max-w-md">
            <CreateHabitForm onSuccess={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
```

**Features:**
- Fixed bottom-right position
- Purple-pink gradient background
- Rotates 90° on hover
- Opens modal overlay with form

### ThemeToggle Component

**File:** `app/_components/ThemeToggle.tsx`

Toggles between light and dark mode using localStorage and Tailwind's dark mode.

```typescript
'use client';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    if (shouldBeDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button onClick={toggleTheme}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
```

**Features:**
- Persists theme preference in localStorage
- Respects system preference on first load
- Prevents hydration mismatch with `mounted` check
- Toggles `.dark` class on `<html>`

### CreateHabitForm Component

**File:** `app/_components/CreateHabitForm.tsx`

Form for creating new habits with validation.

```typescript
'use client';

import { useActionState, useEffect, useRef } from "react";
import { createHabit, type FormState } from "../actions/createHabit";

interface CreateHabitFormProps {
  onSuccess?: () => void;
}

export function CreateHabitForm({ onSuccess }: CreateHabitFormProps) {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    createHabit,
    {}
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      onSuccess?.();
    }
  }, [state.success, onSuccess]);

  return (
    <form ref={formRef} action={formAction}>
      <input name="title" placeholder="e.g., Read 30 minutes" required />
      <select name="cadence" required>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
      <input name="targetPerWeek" type="number" min="1" max="7" defaultValue="7" required />
      {state.error && <div className="error">{state.error}</div>}
      {state.success && <div className="success">Habit created!</div>}
      <button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Habit"}
      </button>
    </form>
  );
}
```

**Features:**
- Uses `useActionState` hook for form handling
- Real-time validation with Zod
- Auto-resets form on success
- Shows error and success messages
- Disables submit button while pending

---

## 8. Pages & Routes

### Landing Page

**Route:** `/`  
**File:** `app/page.tsx`

**Features:**
- Pixel-art design with Press Start 2P font
- Hero section with James Clear quote over mountain background
- 3 feature cards: Goals, Streaks, Insights
- CTA section with winter forest background
- Navigation with shadcn Button components
- Maroon "TrackHab" title, dark blue navigation links

**Key Components:**
- shadcn Button (variant="link")
- shadcn Card with thick borders (border-8)
- Next.js Image with pixelated rendering

### Dashboard Page

**Route:** `/dashboard`  
**File:** `app/dashboard/page.tsx`

**Protected:** Requires authentication

**Features:**
- User greeting with name/email
- Sign Out button
- Link to Insights page
- MotivationQuote component
- ProgressBar showing today's completion
- List of habits with toggle buttons
- Streak badges (🔥) for active streaks
- DeleteHabitButton on hover
- CreateHabitForm at bottom
- QuickAddButton floating action button

**Dynamic Rendering:**
```typescript
export const dynamic = 'force-dynamic';
export const revalidate = 0;
```

### Insights Page

**Route:** `/insights`  
**File:** `app/insights/page.tsx`

**Protected:** Requires authentication

**Features:**
- Overall statistics cards:
  - Total habits count
  - Total completions
  - Average completion rate (last 30 days)
- Per-habit breakdown:
  - Current streak (🔥)
  - Best streak (🏆)
  - Total days (✅)
  - Completion rate (last 30 days)
  - Completion rate progress bar
  - 12-week heatmap calendar
- Link back to dashboard

**Calculations:**
```typescript
const completionRate = habit.cadence === 'daily'
  ? Math.round((recentLogs.length / 30) * 100)
  : Math.round((recentLogs.length / (habit.targetPerWeek * 4)) * 100);
```

### Sign In Page

**Route:** `/auth/signin`  
**File:** `app/auth/signin/page.tsx`

**Features:**
- Google OAuth sign-in button
- Redirects to `/dashboard` after authentication
- Auto-redirects if already logged in

### Auth Error Page

**Route:** `/auth/error`  
**File:** `app/auth/error/page.tsx`

**Features:**
- Displays authentication errors
- Common causes explanation
- "Try Again" button
- Contact support link

---

## 9. Features

### Streak Calculation System

**File:** `lib/streak.ts`

#### Daily Streak Algorithm

```typescript
export function computeDailyStreak(dayLogs: string[], today: string): number {
  if (dayLogs.length === 0) return 0;

  const logSet = new Set(dayLogs);
  const todayDate = parseISO(today);
  
  let streak = 0;
  const hasTodayLog = logSet.has(today);
  
  let startDate: Date;
  if (hasTodayLog) {
    startDate = todayDate;
  } else {
    const yesterday = subDays(todayDate, 1);
    const yesterdayStr = format(yesterday, 'yyyy-MM-dd');
    if (!logSet.has(yesterdayStr)) return 0;
    startDate = yesterday;
  }

  for (let i = 0; i < 365; i++) {
    const checkDate = subDays(startDate, i);
    const checkStr = format(checkDate, 'yyyy-MM-dd');
    if (logSet.has(checkStr)) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}
```

**Logic:**
1. Check if today is logged
2. If not, check yesterday (grace period)
3. Count backwards until gap found
4. Return consecutive day count

#### Weekly Streak Algorithm

```typescript
export function computeWeeklyStreak(
  dayLogs: string[],
  targetPerWeek: number,
  today: string
): number {
  if (dayLogs.length === 0) return 0;

  const todayDate = parseISO(today);
  const logDates = dayLogs.map(d => parseISO(d));
  const weekStart = startOfWeek(todayDate, { weekStartsOn: 1 });
  
  let streak = 0;
  let currentWeekStart = weekStart;

  for (let weekOffset = 0; weekOffset < 52; weekOffset++) {
    const weekEnd = endOfWeek(currentWeekStart, { weekStartsOn: 1 });
    const logsInWeek = logDates.filter(logDate => 
      logDate >= currentWeekStart && logDate <= weekEnd
    ).length;

    if (logsInWeek >= targetPerWeek) {
      streak++;
    } else {
      if (weekOffset > 0) break;
      if (logsInWeek === 0) break;
    }

    currentWeekStart = subDays(currentWeekStart, 7);
  }

  return streak;
}
```

**Logic:**
1. Group logs by week (Monday start)
2. Count backwards from current week
3. Check if each week meets targetPerWeek
4. Stop at first week that doesn't meet target
5. Current week can be incomplete

#### Longest Streak Algorithm

```typescript
export function computeLongestStreak(dayLogs: string[]): number {
  if (dayLogs.length === 0) return 0;

  const sortedLogs = [...dayLogs].sort();
  let longest = 1;
  let current = 1;

  for (let i = 1; i < sortedLogs.length; i++) {
    const prevDate = parseISO(sortedLogs[i - 1]);
    const currDate = parseISO(sortedLogs[i]);
    const dayDiff = differenceInDays(currDate, prevDate);

    if (dayDiff === 1) {
      current++;
      longest = Math.max(longest, current);
    } else if (dayDiff > 1) {
      current = 1;
    }
  }

  return longest;
}
```

### Timezone Handling

**File:** `lib/day.ts`

```typescript
import { formatInTimeZone } from "date-fns-tz";

export function todayInManila(): string {
  return formatInTimeZone(new Date(), "Asia/Manila", "yyyy-MM-dd");
}
```

**Why Asia/Manila?**
- Consistent date boundaries for all users
- Avoids timezone edge cases
- Server and client use same date reference

### Testing

**File:** `lib/streak.test.ts`

```typescript
import { describe, it, expect } from 'vitest';
import { computeDailyStreak, computeWeeklyStreak, computeLongestStreak } from './streak';

describe('computeDailyStreak', () => {
  it('returns 0 for empty logs', () => {
    expect(computeDailyStreak([], '2025-11-09')).toBe(0);
  });

  it('returns 1 when only today is logged', () => {
    expect(computeDailyStreak(['2025-11-09'], '2025-11-09')).toBe(1);
  });

  it('counts consecutive days correctly', () => {
    const logs = ['2025-11-07', '2025-11-08', '2025-11-09'];
    expect(computeDailyStreak(logs, '2025-11-09')).toBe(3);
  });

  it('stops at first gap', () => {
    const logs = ['2025-11-05', '2025-11-07', '2025-11-08', '2025-11-09'];
    expect(computeDailyStreak(logs, '2025-11-09')).toBe(3);
  });

  it('allows yesterday as grace period', () => {
    const logs = ['2025-11-06', '2025-11-07', '2025-11-08'];
    expect(computeDailyStreak(logs, '2025-11-09')).toBe(3);
  });
});
```

**Run Tests:**
```bash
npm test
```

---

## 10. Styling Guide

### Tailwind CSS v4 Configuration

**File:** `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}
export default config
```

### Global Styles

**File:** `app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

@plugin 'tailwindcss-animate';
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

html, body, :root { 
  height: 100%; 
}

body { 
  background-color: #f9fafb;
  color: #111827;
  image-rendering: pixelated; /* Crisp pixel art */
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

:root.dark body {
  background-color: #111827;
  color: #f9fafb;
}

@keyframes confetti {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) rotate(720deg) translateY(100vh);
    opacity: 0;
  }
}
```

### Tailwind v4 Key Changes

1. **No `@apply` in base layer**: Use custom CSS or inline Tailwind classes
2. **New import syntax**: `@import "tailwindcss"` instead of `@tailwind`
3. **@plugin directive**: Replaces `plugins: []` in config
4. **@theme inline**: CSS variables for theme customization
5. **@custom-variant**: Define custom variants like dark mode

### Pixel-Art Aesthetic

**Press Start 2P Font:**
```css
font-family: "Press Start 2P", monospace;
```

**Image Rendering:**
```css
image-rendering: pixelated;
```

**Color Palette:**
- Maroon: `#800020` (TrackHab title)
- Dark Blue: `#00008B` (Navigation links)
- Light Blue: `#87CEEB`, `#ADD8E6` (Backgrounds)
- Gray: `#1a1a1a` (Text)
- White: `#FFFFFF` (Cards)

**Thick Borders:**
```tsx
<Card className="border-8 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
```

**Hover Effects:**
```tsx
className="hover:translate-y-[-8px] transition-transform"
```

---

## 11. Setup & Installation

### Prerequisites

- **Node.js**: 18.17 or later
- **npm**: 9.6 or later
- **PostgreSQL**: Database (or Vercel Postgres)
- **Google OAuth App**: For authentication

### Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/smart-habit-tracker.git
cd smart-habit-tracker/smart-habit-tracker
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://yourdomain.com/api/auth/callback/google`
6. Copy Client ID and Client Secret

### Step 4: Create Environment File

Create `.env` file in root:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/habit_tracker"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here" # Generate with: openssl rand -base64 32

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Node Environment
NODE_ENV="development"
```

### Step 5: Setup Database

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# (Optional) Open Prisma Studio to view database
npx prisma studio
```

### Step 6: Add Assets

Place pixel-art images in `public/` directory:

```
public/
├── logo.png (48x48px flame icon)
└── images/
    ├── mountain-bg.png (1920x1080px)
    ├── goals-icon.png (128x128px)
    ├── streaks-icon.png (128x128px)
    ├── insights-icon.png (128x128px)
    └── cta-bg.png (1920x600px)
```

See [ASSETS_GUIDE.md](./ASSETS_GUIDE.md) for asset specifications.

### Step 7: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Step 8: Build for Production

```bash
npm run build
npm start
```

---

## 12. Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/db` |
| `NEXTAUTH_URL` | Application base URL | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | JWT encryption key | `openssl rand -base64 32` |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | `123456789-abc.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | `GOCSPX-abc123...` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |

### Production Deployment (Vercel)

Environment variables are configured in Vercel Dashboard:

1. Go to Project Settings → Environment Variables
2. Add all required variables
3. Select production, preview, or development scope
4. Redeploy to apply changes

**Vercel Postgres:**
```env
DATABASE_URL="postgres://..."  # Auto-populated by Vercel
```

---

## 13. Deployment

### Deploying to Vercel

#### Method 1: GitHub Integration (Recommended)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/smart-habit-tracker.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: **Next.js**
   - Root Directory: `smart-habit-tracker`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Add environment variables
7. Click "Deploy"

#### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

### Database Setup (Vercel Postgres)

1. Go to Vercel Dashboard → Storage
2. Create new Postgres database
3. Connect to your project
4. Copy `DATABASE_URL` environment variable
5. Run migrations:
```bash
npx prisma migrate deploy
```

### Post-Deployment Checklist

- [ ] Test Google OAuth login
- [ ] Create a test habit
- [ ] Toggle habit completion
- [ ] Check insights page
- [ ] Test dark mode
- [ ] Verify confetti animation
- [ ] Check mobile responsiveness
- [ ] Test sign out

### Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records (provided by Vercel)
4. Update `NEXTAUTH_URL` environment variable
5. Add domain to Google OAuth authorized URIs
6. Redeploy

---

## 14. Testing

### Unit Tests (Vitest)

**Run all tests:**
```bash
npm test
```

**Watch mode:**
```bash
npm test -- --watch
```

**UI mode:**
```bash
npm run test:ui
```

**Coverage:**
```bash
npm test -- --coverage
```

### Test Structure

```typescript
// lib/streak.test.ts
import { describe, it, expect } from 'vitest';

describe('computeDailyStreak', () => {
  it('returns 0 for empty logs', () => {
    expect(computeDailyStreak([], '2025-11-09')).toBe(0);
  });
});
```

### Writing New Tests

1. Create `*.test.ts` file next to source
2. Import testing utilities from `vitest`
3. Use `describe` for test suites
4. Use `it` or `test` for individual tests
5. Use `expect` for assertions

### Manual Testing Checklist

**Authentication:**
- [ ] Sign in with Google
- [ ] Session persists across pages
- [ ] Sign out works correctly
- [ ] Redirects to sign-in when not authenticated

**Habit Creation:**
- [ ] Create daily habit
- [ ] Create weekly habit (3x per week)
- [ ] Validation errors display correctly
- [ ] Form resets after creation

**Habit Tracking:**
- [ ] Toggle habit completion
- [ ] Confetti appears on completion
- [ ] Progress bar updates
- [ ] Streak counter updates

**Insights Page:**
- [ ] Statistics calculate correctly
- [ ] Heatmap displays 12 weeks
- [ ] Completion rates accurate
- [ ] Per-habit breakdowns show

**Dark Mode:**
- [ ] Toggle switches theme
- [ ] Preference persists in localStorage
- [ ] All components support dark mode
- [ ] No flash of wrong theme on load

---

## 15. Troubleshooting

### Common Issues

#### 1. CSS Import Order Error

**Error:**
```
Failed to compile
./app/globals.css
Syntax error: Google Font import must come before Tailwind import
```

**Solution:**
Ensure Google Font import is first in `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@plugin 'tailwindcss-animate';
@import "tailwindcss";
```

#### 2. Hydration Mismatch

**Error:**
```
Hydration failed because the server rendered HTML didn't match the client.
```

**Solution:**
Use `useState` to track mounted state in client components:
```typescript
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return <div>Loading...</div>;
```

#### 3. Prisma Client Not Generated

**Error:**
```
Cannot find module '@prisma/client'
```

**Solution:**
```bash
npx prisma generate
```

Add to `package.json` build script:
```json
"build": "prisma generate && next build"
```

#### 4. Google OAuth Redirect URI Mismatch

**Error:**
```
redirect_uri_mismatch
```

**Solution:**
Add both development and production URIs to Google Console:
- `http://localhost:3000/api/auth/callback/google`
- `https://yourdomain.com/api/auth/callback/google`

#### 5. Database Connection Timeout

**Error:**
```
PrismaClientKnownRequestError: Can't reach database server
```

**Solution:**
- Check `DATABASE_URL` environment variable
- Ensure PostgreSQL is running
- Verify firewall/network settings
- For Vercel Postgres, check IP allowlist

#### 6. Dark Mode Not Persisting

**Issue:** Dark mode resets on page refresh

**Solution:**
Check ThemeToggle component:
```typescript
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
}, []);
```

#### 7. Confetti Not Appearing

**Issue:** Confetti animation doesn't trigger

**Solution:**
Ensure keyframe animation is defined in `globals.css`:
```css
@keyframes confetti {
  0% { transform: translate(-50%, -50%) rotate(0deg) translateY(0); opacity: 1; }
  100% { transform: translate(-50%, -50%) rotate(720deg) translateY(100vh); opacity: 0; }
}
```

#### 8. Streaks Not Calculating

**Issue:** Streak shows 0 despite habit logs

**Solution:**
- Check timezone: logs must use `todayInManila()` format
- Verify unique constraint on `habitId` + `dayLocal`
- Test streak logic in Vitest

#### 9. Image Not Loading

**Issue:** Pixel-art images not displaying

**Solution:**
- Verify images exist in `public/` directory
- Check image path: `/logo.png` not `./logo.png`
- Clear Next.js cache: `rm -rf .next`
- Restart dev server

#### 10. Vercel Deployment Fails

**Error:**
```
Build failed: Prisma schema not found
```

**Solution:**
Ensure `prisma/schema.prisma` is committed to Git:
```bash
git add prisma/schema.prisma
git commit -m "Add Prisma schema"
git push
```

---

## Additional Resources

### Documentation Links

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js v5 Documentation](https://authjs.dev/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [Vitest Documentation](https://vitest.dev/)

### API References

- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [React 19 useActionState](https://react.dev/reference/react/useActionState)
- [Prisma Client API](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)
- [date-fns Documentation](https://date-fns.org/docs/)

### Community & Support

- **GitHub Issues**: Report bugs and request features
- **Discord**: Join Next.js and Prisma communities
- **Stack Overflow**: Tag questions with `nextjs`, `prisma`, `nextauth`

---

## License

This project is licensed under the MIT License.

---

## Contributors

Created with ❤️ by the Smart Habit Tracker team.

---

*Last Updated: January 2025*
