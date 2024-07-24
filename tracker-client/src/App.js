
import './App.css';

// Routing mimics MPA (react is SPA)
import React, { createContext, useContext, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"

// Page exports for each route
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from './pages/signup';
import ProfilePage from './pages/ProfilePage/profilePage';
import MangaPage from './pages/MangaPage/mangaPage';
import MangaInfo from './pages/manga_data';
import MangaOverall from './pages/manga_overall';
import UserInfo from './pages/user_page';
import User from './components/user';
import { UserCheck } from './components/protect_route';

// Allows the logged in user to be passed to all routes
export const UserContext = createContext(false)

function App() {

  const [user, setUser] = useState(false)

  return (
    // Strict mode highlights possible problems. Does not create any visible elements
    // navigation will place in header
    <React.StrictMode>

      <div className='App'>
        
        <header className='web-header'> 
          <h4> Header: Navigation go here</h4>
        </header>
        <div className='page-wrapper'> 
          <UserContext.Provider value={user}>
            <BrowserRouter>
              <User />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login setUser={setUser}/>} />
                <Route path="signup" element={<Signup />} />
                <Route path="manga" element={<MangaOverall />} />
                <Route path="manga/:mangaID" element={<MangaInfo />} />
                <Route path="user/:userID" element={
                  <UserCheck>
                    <ProfilePage />
                  </UserCheck>
                } />

              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
