import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from './Home/index.jsx'
import Dashboard from './Dashboard/index.jsx'
import SignInPage from   "./auth/sign-in";
import { ClerkProvider } from "@clerk/clerk-react";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index:true, element:<Home/>},
      // { path: "Home", element: <Home /> },
      { path: "Dashboard", element: <Dashboard /> },
    ],
  },
  {
    path:'/auth/sign-in',
    element:<SignInPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
   
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <RouterProvider router={router} />
      </ClerkProvider>
  
  </React.StrictMode>
);
