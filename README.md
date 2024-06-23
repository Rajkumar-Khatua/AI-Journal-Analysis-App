# AI Powered Journal App Moody

## Description

Moody is a journal app that uses AI to analyze your mood and provide insights into your mental health. It uses a sentiment analysis model to analyze your journal entries and provide you with a mood score. The app also provides you with a mood history graph that shows how your mood has changed over time. You can use this information to track your mental health and make positive changes in your life.

## Features

-   Mood analysis: The app uses a sentiment analysis model to analyze your journal entries and provide you with a mood score.
-   Mood history: The app provides you with a mood history graph that shows how your mood has changed over time.
-   Journal entries: You can write journal entries and save them in the app.
-   Mood insights: The app provides you with insights into your mood and mental health based on your journal entries.
-   Mood tracking: You can track your mood over time and make positive changes in your life.
-   User-friendly interface: The app has a user-friendly interface that makes it easy to use.
-   Secure: The app uses encryption to protect your data and ensure your privacy.
-   Customizable: You can customize the app to suit your needs and preferences.

**NOTE**: This project is still in development and is not yet ready for production use. (Above features are planned features)

## Technologies

-   TypeScript (for type safety)
-   React (for the frontend)
-   Next.js (for server-side rendering)
-   Tailwind CSS (for styling)
-   CockroachDB (Postgres)
-   Prisma ORM
-   Clerk (authentication)

**NOTE**: As of now, these are the technologies we are using in the project. More technologies will be added as the project progresses.

## Installation

1. Clone the repository

```bash
    git clone https://github.com/Rajkumar-Khatua/AI-Journal-Analysis-App.git
    cd AI-Journal-Analysis-App
```

2. Install the dependencies

```bash
    npm install
```

3. Create a `.env.local` file in the root directory and add the following environment variables

```bash
    for environment variables, I'm using two separated files
    - .env.local (for frontend environment variables that are accessible in the browser)
    - .env (for backend environment variables for now I'm using this file for storing the database url key)
```

### .env.local

```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="Add your clerk publishable key here"
    CLERK_SECRET_KEY="Add your clerk secret key here"

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_URL=/journal
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_URL=/new-user
```

### .env

```bash
    DATABASE_URL="Add your database url here"
```

4. Run the development server

```bash
    npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Contributing to the Project 🚀

If you want to contribute to the project, you can follow the steps below:

1. Fork the repository
2. Clone the repository
3. Create a new branch
4. Make your changes
5. Commit your changes
6. Push to the branch
7. Create a new pull request

**NOTE**: Thanks for reading this far! 🙌 Just a few moments left.

Hey there!

Just a heads up that this project is still being worked on, so there might be a few kinks to iron out. The features we mentioned earlier aren't quite ready yet, but we're getting close!

If you run into any bugs or have some ideas on how to make things better, feel free to let us know! You can create a new issue in the project repository, or just shoot me a message on [Twitter](https://twitter.com/RajkumarKh18976) or [LinkedIn](https://www.linkedin.com/in/rajkumarkhatua/).

This project is in its very early stages, and my focus right now is on building a solid backend. But that doesn't mean I'm not open to ideas! If you've got some thoughts on how to make the UI amazing, feel free to share them by creating an issue or just letting me know.

Cheers! 🚀
