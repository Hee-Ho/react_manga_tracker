
import './App.css';

// Routing mimics MPA (react is SPA)
import React, { createContext, useContext, useState } from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom"

// Page exports for each route
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from './pages/signup';
import MangaInfo from './pages/manga_data';
import MangaOverall from './pages/manga_overall';
import UserInfo from './pages/user_page';
import User from './components/user';

// Allows the logged in user to be passed to all routes
export const UserContext = createContext(null)

function App() {

  const [user, setUser] = useState(false)

  return (
    // Strict mode highlights possible problems. Does not create any visible elements
    <React.StrictMode>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <User />
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="manga" element={<MangaOverall />} />
            <Route path="manga/:mangaID" element={<MangaInfo />} />
            <Route path="user/:userID" element={<UserInfo />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </React.StrictMode>
  );
}

export default App;
