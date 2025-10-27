# Movie Recommendation App

A modern movie and book recommendation application built with Next.js 14, TypeScript, Tailwind CSS, and Zustand.

## 📁 Project Structure

```
src/
 ├── app/
 │   ├── layout.tsx                 # Root layout with Navbar
 │   ├── page.tsx                   # Home page with movies and books
 │   ├── movies/
 │   │   └── page.tsx               # Movies page with search and filters
 │   ├── books/
 │   │   └── page.tsx               # Books page with search and filters
 │   ├── my-list/
 │   │   └── page.tsx               # User's saved items
 │   ├── login/
 │   │   └── page.tsx               # Login page
 │   └── register/
 │       └── page.tsx               # Registration page
 ├── components/
 │   ├── Navbar.tsx                 # Navigation bar component
 │   ├── MovieCard.tsx              # Movie card component
 │   └── BookCard.tsx               # Book card component
 ├── lib/
 │   ├── utils.ts                   # Utility functions
 │   └── api.ts                     # API request functions
 ├── store/
 │   ├── useAuthStore.ts            # Authentication state (Zustand)
 │   └── useListStore.ts            # My List state (Zustand)
 ├── styles/
 │   └── globals.css                # Global styles with Tailwind
 └── types/
     ├── movie.ts                   # Movie type definition
     └── book.ts                    # Book type definition
```

## 🚀 Features

- **Movies & Books**: Browse and discover movies and books
- **Search & Filter**: Search by title and filter by genre/year
- **My List**: Save your favorite movies and books
- **Authentication**: Login and registration system
- **Responsive Design**: Works on all devices
- **Modern UI**: Beautiful gradients and animations
- **State Management**: Zustand for global state
- **Type Safety**: Full TypeScript support

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: Next.js App Router

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## 🎯 Pages

- **Home** (`/`) - Main page with tabs for movies and books
- **Movies** (`/movies`) - Browse and search movies
- **Books** (`/books`) - Browse and search books
- **My List** (`/my-list`) - Your saved movies and books
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user registration

## 📝 Usage

### Authentication
- Register a new account or login with existing credentials
- User session is persisted using Zustand with localStorage

### My List
- Click the "+" button on any movie or book card to add it to your list
- View all saved items in the "My List" page

### Search & Filters
- Use the search bar to search by title or description
- Filter by genre using the dropdown
- Filter movies by year

## 🎨 Components

### Navbar
- Responsive navigation bar
- Links to all main pages
- Shows user info and logout when logged in

### MovieCard
- Displays movie information
- Add to list button
- Hover effects and animations

### BookCard
- Displays book information
- Add to list button
- Hover effects and animations

## 🔧 State Management

### useAuthStore
- Manages user authentication state
- Login, register, and logout functions
- Persists user data to localStorage

### useListStore
- Manages user's saved movies and books
- Add/remove items from list
- Persists list data to localStorage

## 🌟 Enjoy Your App!

Start discovering your next favorite movie or book! 🎬📚
