# Vercel Deployment Guide

## Option 1: Using Vercel Postgres (Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository: `Romeo-04/smart-habit-tracker`
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `smart-habit-tracker`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 3: Add Vercel Postgres

1. In your Vercel project dashboard, go to **Storage** tab
2. Click **"Create Database"** → Select **"Postgres"**
3. Choose a region close to your users
4. Click **"Create"**
5. Vercel will automatically add the `DATABASE_URL` environment variable

### Step 4: Update Prisma Schema for Production

You'll need to update your schema to support PostgreSQL in production while keeping SQLite for local development.

Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"  // Change from "sqlite"
  url      = env("DATABASE_URL")
}
```

### Step 5: Push Database Schema

After Vercel Postgres is connected, run migrations:

1. Install Vercel CLI locally:
   ```bash
   npm i -g vercel
   ```

2. Link your project:
   ```bash
   vercel link
   ```

3. Pull environment variables:
   ```bash
   vercel env pull
   ```

4. Run Prisma migrate:
   ```bash
   npx prisma migrate deploy
   ```

5. Seed the production database (optional):
   ```bash
   npx prisma db seed
   ```

### Step 6: Redeploy

Push your changes to trigger a new deployment:
```bash
git add .
git commit -m "Update schema for PostgreSQL"
git push origin main
```

---

## Option 2: Using Turso (SQLite for Production)

If you prefer to keep SQLite, use [Turso](https://turso.tech/) - a distributed SQLite database:

1. Sign up at [turso.tech](https://turso.tech)
2. Install Turso CLI:
   ```bash
   curl -sSfL https://get.tur.so/install.sh | bash
   ```

3. Create a database:
   ```bash
   turso db create smart-habit-tracker
   ```

4. Get the connection URL:
   ```bash
   turso db show smart-habit-tracker --url
   ```

5. Create an auth token:
   ```bash
   turso db tokens create smart-habit-tracker
   ```

6. Add to Vercel Environment Variables:
   - `DATABASE_URL` = `libsql://[your-db-url]`
   - `DATABASE_AUTH_TOKEN` = `[your-token]`

7. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

---

## Testing Your Deployment

1. Visit your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
2. Test creating a habit
3. Test toggling habit completion
4. Check the Insights page
5. Test deleting a habit

---

## Troubleshooting

### Build Error: "Prisma Client not generated"
- Ensure `postinstall` script runs: `"postinstall": "prisma generate"`
- Check that `prisma/schema.prisma` is committed to git

### Database Connection Error
- Verify `DATABASE_URL` is set in Vercel environment variables
- Check that the database region matches your function region
- Ensure Prisma schema `provider` matches your database type

### "Cannot find module @prisma/client"
- Make sure `@prisma/client` is in `dependencies` (not `devDependencies`)
- Redeploy to trigger a fresh build

---

## Environment Variables Needed

For Vercel Postgres:
- `DATABASE_URL` - Automatically added by Vercel

For Turso:
- `DATABASE_URL` - Your Turso database URL
- `DATABASE_AUTH_TOKEN` - Your Turso auth token

---

## Next Steps After Deployment

- ✅ Add custom domain in Vercel settings
- ✅ Enable Analytics in Vercel dashboard
- ✅ Set up GitHub integration for automatic deployments
- ✅ Add authentication (NextAuth.js with GitHub/Google)
- ✅ Configure production error tracking (Sentry)
