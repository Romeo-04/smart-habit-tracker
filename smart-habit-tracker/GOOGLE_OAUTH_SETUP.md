# Setting Up Google OAuth for NextAuth

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name it "Smart Habit Tracker" → Click "Create"

## Step 2: Enable Google+ API

1. In the left sidebar, click "APIs & Services" → "Library"
2. Search for "Google+ API"
3. Click on it and click "Enable"

## Step 3: Configure OAuth Consent Screen

1. Go to "APIs & Services" → "OAuth consent screen"
2. Select "External" → Click "Create"
3. Fill in:
   - App name: `Smart Habit Tracker`
   - User support email: Your email
   - Developer contact: Your email
4. Click "Save and Continue"
5. Skip "Scopes" → Click "Save and Continue"
6. Skip "Test users" → Click "Save and Continue"

## Step 4: Create OAuth Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. Application type: "Web application"
4. Name: "Smart Habit Tracker Web"
5. Add Authorized redirect URIs:
   - For local: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://smart-habit-tracker-romeo-04s-projects.vercel.app/api/auth/callback/google`
6. Click "Create"
7. **Copy the Client ID and Client Secret!**

## Step 5: Update .env File

Replace these values in your `.env` file:

```
GOOGLE_CLIENT_ID="your-actual-client-id-here"
GOOGLE_CLIENT_SECRET="your-actual-client-secret-here"
```

## Step 6: Add to Vercel

Add these environment variables in Vercel:
1. Go to: https://vercel.com/romeo-04s-projects/smart-habit-tracker/settings/environment-variables
2. Add:
   - `GOOGLE_CLIENT_ID` = your client ID
   - `GOOGLE_CLIENT_SECRET` = your client secret
   - `NEXTAUTH_SECRET` = run `openssl rand -base64 32` to generate
   - `NEXTAUTH_URL` = `https://smart-habit-tracker-romeo-04s-projects.vercel.app`

## Step 7: Generate NEXTAUTH_SECRET

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Or use: https://generate-secret.vercel.app/32

Add the output to both `.env` and Vercel environment variables.

---

**After setting up, you can test locally with `npm run dev`!**
