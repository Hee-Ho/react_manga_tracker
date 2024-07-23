
import './App.css';

// Routing mimics MPA (react is SPA)
import React from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Page exports for each route
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from './pages/signup';
import MangaInfo from './pages/manga_data';
import MangaOverall from './pages/manga_overall';
import UserInfo from './pages/user_page';

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
    path: "manga/:mangaID",
    element: <MangaInfo />
  },
  {
    path: "user/:userID",
    element: <UserInfo />
  }

]

)



function App() {
  return (
    // Strict mode highlights possible problems. Does not create any visible elements
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
}

export default App;
