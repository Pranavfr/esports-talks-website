This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Project Overview

The project is structured into various small folders to help new developers easily differentiate and navigate between the frontend and backend components.

## Frontend

### app/
The `app/` folder contains the main application structure, including:
- **Navbar Buttons:** Navigation links to different sections of the application.
- **Page.tsx:** Core page of the application.

### components/
- **/ui**: This folder contains most of the ShadCN components essential for the project. Be sure to explore it.
- **Other Components:** Contains various component pages such as:
  - Hero Slider
  - Join Us
  - Ongoing Tournament
### public/
This Folder contains The site Logo .
These components collectively form the frontend pages of the project.

## Backend

The backend structure begins after the `components` folder. It includes files related to backend configuration and interface layout pages. Like:

- **Supabase:** Used for database schema definitions and migrations, found under `supabase/migrations`.
- **Google Firebase:** Provides backend services.
- **RapidAPI:** Available for future API integrations.

The backend ensures a seamless connection between the frontend and external services, enabling a robust and dynamic application.

