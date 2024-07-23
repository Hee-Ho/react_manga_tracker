
import './App.css';

// Routing mimics MPA (react is SPA)
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Page exports for each route
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from './pages/signup';
import ProfilePage from './pages/ProfilePage/profilePage';
import MangaPage from './pages/MangaPage/mangaPage';
import MangaInfo from './pages/manga_data';
import MangaOverall from './pages/manga_overall';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signup",
    element: <Signup />
  },
  {
    path: "manga",
    element: <MangaOverall />
  },
  {
    path: "profile/:user_id",
    element: <ProfilePage/> 
  },
  {
    path: "manga/:mangaID",
    element: <MangaInfo />
  },
  {
    path: "mangalist",
    element: <MangaPage/>
  }
]
)

function App() {
  return (
    // Strict mode highlights possible problems. Does not create any visible elements
    // navigation will place in header
    <React.StrictMode>
      <div className='App'>
        
        <header className='web-header'> 
          <h4> Header: Navigation go here</h4>
        </header>
        <div className='page-wrapper'> 
          <RouterProvider router={routes} />
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
