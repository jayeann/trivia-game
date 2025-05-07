### 🚧 **Work in progress** 
> Currently, this project is under development, and some features may be incomplete or not polished. I’m working on:
> - Polishing the UI for a better user experience.
> - Adding more contents and categories.
> - Improving performance and optimizing code.

Feel free to explore and provide feedback!



## 🎵🎬 TriviaGuess

A guessing game where players try to guess the **song**, **TV show**, or **movie** based on a short clue or hint.

This project was built as a personal experiment to explore and play with modern frontend tools like **Vite**, **Tailwind CSS**, **Zustand**, **TanStack Query**, and **Firebase**. It’s a casual app with no pressure—just practicing clean code and fun features.

![image](https://github.com/user-attachments/assets/eb3016ce-687e-4c72-b7e0-32efb0c4ce7f)

### 📍 Check it out
You can check out the live demo here: https://trivia-game-5f9cb.web.app/

Please note that the app is still in progress, so not everything is fully functional yet.

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

### 🔧 Tech Stack

- **Framework**: Vite (React)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Layer**: TanStack Query
- **Backend**: Firebase (Firestore)

### 🛠️ Installation
To get started with this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/jayeann/trivia-game.git
```
2. Navigate to the project directory:

```bash
cd trivia-game
```
3. Install dependencies:

```bash
npm install
```
4. Run the app locally:

```bash
npm run dev
```
Now, you should be able to access the game at http://localhost:5173/

# React + TypeScript + Vite
