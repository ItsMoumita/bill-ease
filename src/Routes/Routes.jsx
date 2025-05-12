import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import OrganizerDetails from '../Pages/OrganizerDetails';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import Profile from '../Pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            path: "/",
            Component: Home
        },
        {
          path: "/organizer/:id",
          Component: OrganizerDetails
        },
        {
          path: "/login",
          Component: Login
        },
        {
          path: "/registration",
          Component: Registration
        },
        {
          path: "/profile",
          Component: Profile
        }
        
    ],
  },
]);

export default router;