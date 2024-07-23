
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
    element: <MangaPage/>
  },
  {
    path: "profile/:user_id",
    element: <ProfilePage/> 
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
