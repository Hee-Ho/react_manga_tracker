
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
