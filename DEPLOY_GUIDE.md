# Deployment Guide: Eternal Tower Saga

This guide outlines the steps to deploy the Eternal Tower Saga landing page to Vercel with a PostgreSQL database.

## Prerequisites
- A [GitHub](https://github.com) account.
- A [Vercel](https://vercel.com) account.

## Step 1: Push to GitHub
1.  Initialize a Git repository (if not already done):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  Create a new repository on GitHub.
3.  Push your code:
    ```bash
    git remote add origin <your-repo-url>
    git branch -M main
    git push -u origin main
    ```

## Step 2: Import into Vercel
1.  Log in to Vercel and click **"Add New..."** -> **"Project"**.
2.  Select your GitHub repository.
3.  In the **Configure Project** screen:
    - **Framework Preset**: Next.js (should be auto-detected).
    - **Root Directory**: `eternal-tower-saga` (if you are in the root of the repo, otherwise leave default).
    - **Environment Variables**: Skip for now (we will add them after creating the DB).

## Step 3: Configure Database (Vercel Postgres)
1.  Once the project is created (deployment might fail initially due to missing DB, that's okay), go to the **Storage** tab in your Vercel project dashboard.
2.  Click **"Connect Store"** -> **"Create New"** -> **"Postgres"**.
3.  Accept the terms and create the database.
4.  Once created, go to the **.env.local** tab in the database page.
5.  Copy the `POSTGRES_PRISMA_URL` or `DATABASE_URL`.
6.  Go to your Project **Settings** -> **Environment Variables**.
7.  Add a new variable:
    - **Key**: `DATABASE_URL`
    - **Value**: (Paste the connection string you copied). *Note: If using Vercel Postgres, use the "Prisma" specific connection string if available, or the standard one.*

## Step 4: Run Migrations
Vercel builds will automatically generate the Prisma Client because we added `"postinstall": "prisma generate"` to `package.json`. However, we need to push the schema to the DB.

**Option A: From Local Machine (Easiest)**
1.  Update your local `.env` file with the **production** connection string (temporarily) or pass it directly.
2.  Run:
    ```bash
    npx prisma db push
    ```
    *This creates the tables in your Vercel database.*

**Option B: From Vercel Console**
1.  You can also use the Vercel dashboard to redeploy. Since the `DATABASE_URL` is now set, the build should succeed.
2.  However, `prisma db push` is not run automatically during build. You must run it locally to sync the schema.

## Step 5: Verify Deployment
1.  Go to your Vercel project dashboard.
2.  Click **Deployments** -> **Redeploy** (if the first one failed).
3.  Visit your live URL.
4.  Test the registration flow.

## Troubleshooting
- **Build Fails**: Check the build logs. Common issues are missing environment variables.
- **Database Connection Error**: Ensure `DATABASE_URL` is correct and the database is active.
- **Images Not Loading**: If you use external images, ensure the domain is added to `next.config.ts`.
