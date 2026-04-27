# Plantora

Plantora is a personal indoor plant collection showcase and management web app built with Next.js. It lets users browse a curated library of indoor plants, filter by care level and type, view detailed plant information, and manage their own collection after signing in.

---

## Key Features

- Browse 12+ indoor plants with search and filter by care level and plant type
- Dynamic plant detail pages with specs and related plant suggestions
- Firebase authentication — Email/Password and Google Sign-in
- Protected pages for adding and managing your personal plant collection
- Plant care guide broken down by Easy, Medium, and Hard levels
- Clean, nature-inspired UI with responsive layout for all screen sizes

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Auth
- **Icons:** React Icons
- **Toast Notifications:** React Hot Toast

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/gmnayem631/plantora.git
cd plantora
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Firebase

1. Go to [firebase.google.com](https://firebase.google.com) and create a new project
2. Enable **Email/Password** and **Google** sign-in under Authentication
3. Register a web app and copy your Firebase config keys

### 4. Create a `.env.local` file in the root folder

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
plantora/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── about/
│   ├── care-guide/
│   ├── contact/
│   ├── login/
│   ├── register/
│   └── plants/
│       ├── page.js
│       ├── add/
│       ├── manage/
│       └── [id]/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── FeaturedPlants.jsx
│   ├── WhyPlantora.jsx
│   ├── CareLevelGuide.jsx
│   ├── PlantOfTheWeek.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx
└── lib/
    ├── firebase.js
    └── plants.js
```

---

## Route Summary

| Route            | Type      | Description                                                                                    |
| ---------------- | --------- | ---------------------------------------------------------------------------------------------- |
| `/`              | Public    | Landing page with hero, featured plants, why Plantora, care level guide, and plant of the week |
| `/plants`        | Public    | Full plant listing with search bar and filters                                                 |
| `/plants/[id]`   | Public    | Dynamic plant detail page with specs and related plants                                        |
| `/care-guide`    | Public    | Detailed care tips broken down by Easy, Medium, and Hard levels                                |
| `/contact`       | Public    | Contact form                                                                                   |
| `/about`         | Public    | About page with mission, stats, and what Plantora offers                                       |
| `/login`         | Public    | Sign in with Email/Password or Google                                                          |
| `/register`      | Public    | Create a new account                                                                           |
| `/plants/add`    | Protected | Add a new plant to your collection                                                             |
| `/plants/manage` | Protected | View and delete plants from your collection                                                    |

---
