
import './App.css';

// Routing mimics MPA (react is SPA)
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';

// Page exports for each route
import Home from "./pages/HomePage/home"
import Login from "./pages/LoginPage/login"
import Signup from "./pages/SignupPage/signup";
import ProfilePage from './pages/ProfilePage/profilePage';
import MangaPage from './pages/MangaPage/mangaPage';
import MangaInfoPage from './pages/MangaInfoPage/MangaInfoPage';
import MangaInfo from './pages/SpecificMangaPage/manga_data';
import { UserCheck } from './components/protect_route';
import NavigationBar from './components/Navbar/navbar';
import { UserProvider } from './UserContext';

const queryClient = new QueryClient();

function App() {
  const [serverDown, setServerDown] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('');

  //check if server is running
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000');
        setServerDown(false); // Server is reachable
        setLoading(false)
      } catch (error) {
        // Check if error is a network error (server unreachable)
        if (error.message === 'Network Error') {
          setLoading(false)
          setServerDown(true); // Set server down state
        } else {
          setError('An error occurred. Please try again later.');
        }
      }
    };
    fetchData();
  }, [serverDown, error])

  if (serverDown) {
    return (
      <div className="no-server">
        <h2> Status Code 500: Server Not Found</h2>
        <p> Server is currently down</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className='loading-page'> 
        <h2> Please wait while connecting to server</h2>
      </div>
    )
  }


  return (
    // Strict mode highlights possible problems. Does not create any visible elements
    // navigation will place in header
    
    <React.StrictMode>
      <QueryClientProvider client = { queryClient }>
      <div className='App'>
        

        <div className='page-wrapper'> 
          <UserProvider>
              <BrowserRouter>
                <NavigationBar/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<Signup />} />
                  
                  <Route path="testManga/?title=:title?" element={<MangaPage/> }/>
                  <Route path="testManga/manga/:mangaID" element={<MangaInfoPage/>} errorElement={<MangaPage/> }/> 
                  <Route path="manga/:mangaID" element={<MangaInfo />} />
                  <Route path="user/:uid" element={<ProfilePage />} />
                </Routes>
              </BrowserRouter>
          </UserProvider>
          <ReactQueryDevtools />
        </div>
      </div>
      </QueryClientProvider>
    </React.StrictMode>
    
  );
}

export default App;
