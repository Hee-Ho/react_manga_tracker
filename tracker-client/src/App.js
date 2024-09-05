
import './App.css';

// Routing mimics MPA (react is SPA)
import React, { createContext,useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Page exports for each route
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from './pages/signup';
import ProfilePage from './pages/ProfilePage/profilePage';
import MangaPage from './pages/MangaPage/mangaPage';
import MangaInfo from './pages/manga_data';
import MangaOverall from './pages/manga_overall';
import MangaInfoPage from './pages/MangaInfoPage/MangaInfoPage';
import UserInfo from './pages/user_page';
import User from './components/user';
import { UserCheck } from './components/protect_route';
import NavigationBar from './components/Navbar/navbar';

// Allows the logged in user to be passed to all routes
export const UserContext = createContext(false)
const queryClient = new QueryClient();

function App() {

  const [user, setUser] = useState(false)

  return (
    // Strict mode highlights possible problems. Does not create any visible elements
    // navigation will place in header
    
    <React.StrictMode>
      <QueryClientProvider client = { queryClient }>
      <div className='App'>
        

        <div className='page-wrapper'> 
          <UserContext.Provider value={user}>
            <BrowserRouter>
            <header className='web-header'> 
              <NavigationBar/>
            </header>
              <User />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login setUser={setUser}/>} />
                <Route path="signup" element={<Signup />} />
                
                <Route path="manga" element={<UserCheck> <MangaOverall /> </UserCheck>} />
                
                <Route path="testManga/?title=:title?" element={<MangaPage/> }/>
                <Route path="testManga/manga/:mangaID" element={<MangaInfoPage/>} errorElement={<MangaPage/> }/> 
                <Route path="manga/:mangaID" element={<MangaInfo />} />
                <Route path="user" element={<ProfilePage />} />

              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </div>
      </div>

      </QueryClientProvider>
    </React.StrictMode>
    
  );
}

export default App;
