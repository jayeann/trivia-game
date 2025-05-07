
> 🚧 **Work in progress** 

## 🎵🎬 TriviaGuess

A guessing game where players try to guess the **song**, **TV show**, or **movie** based on a short clue or hint.

This project was built as a personal experiment to explore and play with modern frontend tools like **Vite**, **Tailwind CSS**, **Zustand**, **TanStack Query**, and **Firebase**. It’s a casual app with no pressure—just practicing clean code and fun features.

![image](https://github.com/user-attachments/assets/eb3016ce-687e-4c72-b7e0-32efb0c4ce7f)



### Features
- Guess the correct media title (song/show/movie)
- Fast, optimized build using Vite
- Responsive UI with Tailwind CSS
- State management with Zustand
- Async data fetching and caching with TanStack Query
- Firebase integration for data storage

### Game Flow
- Each round has a dynamic set of questions (fetched).
- Navigation with Next/Back buttons.
- Next Button is disabled unless input is filled.
- Each question displays a single media element (video, image, or audio).
- Hints are shown via toggle, and automatically closed when navigating to next/previous.
- User input is saved per question
- User can navigate back and see previous answers
  
**Background Music**
- Plays and loops on app open 
- Pauses if media (video/audio) is playing 
- Resumes after media ends 
- Can be globally muted/unmuted by user 

### Tech Stack

- **Framework**: Vite (React)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Layer**: TanStack Query
- **Backend**: Firebase (Firestore)

### Getting Started

```bash
git clone https://github.com/jayeann/trivia-game.git
cd trivia-game
npm install
npm run dev
```

# React + TypeScript + Vite
