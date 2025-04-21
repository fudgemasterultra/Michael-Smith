# Deployment Guide

This guide will walk you through deploying the website to Firebase Hosting.

## Prerequisites

1. Node.js and npm installed
2. Firebase account
3. Firebase CLI tools

## Installation Steps

1. Install Firebase CLI globally:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

3. Initialize Firebase in your project (if not already done):

```bash
firebase init
```

- Select "Hosting" when prompted
- Choose your Firebase project
- Set the public directory to "out" (this is where Next.js builds the static site)
- Configure as a single-page app: Yes
- Set up automatic builds and deploys with GitHub: No (unless you want to)
- Overwrite index.html: No

## Building and Deploying

1. Build the static site:

```bash
npm run build
```

2. Deploy to Firebase:

```bash
firebase deploy
```

## Environment Variables

Make sure to set up your environment variables in Firebase Hosting:

1. Go to Firebase Console
2. Select your project
3. Go to Hosting
4. Click on "Environment Variables"
5. Add any required environment variables from your `.env` file

## Common Issues

1. If you get a "404" error after deployment:

   - Make sure your `next.config.js` has `output: 'export'` configured
   - Verify that the build completed successfully
   - Check that the `out` directory was created

2. If Firebase deploy fails:
   - Make sure you're logged in (`firebase login`)
   - Verify you have the correct project selected
   - Check that the `out` directory exists and contains the built files

## Additional Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Next.js Static Export Documentation](https://nextjs.org/docs/advanced-features/static-html-export)
