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
import Bills from '../Pages/Bills';
import Private from '../Provider/Private';
import BillsDetails from '../Pages/BillsDetails';
import Error from '../Pages/Error';
import AboutPage from '../Pages/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children:[
        {
            path: "/",
            Component: Home
        },
        {
          path: "/about",
          Component: AboutPage
        },
        {
          path: "/organizer/:id",
          Component: () => (
            <Private>
              <OrganizerDetails />
            </Private>
          ),
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
          Component: () => (
            <Private>
              <Profile />
            </Private>
          )
        },
        {
          path: "/bills",
          Component: () => (
            <Private>
              <Bills />
            </Private>
          )
        },
        {
          path: "/bills/:id",
          Component: () => (
            <Private>
              <BillsDetails />
            </Private>
          ),
          loader: async ({ params }) => {
            const response = await fetch("/Bills.json");
            const data = await response.json();
            const bill = data.find((bill) => bill.id === parseInt(params.id));
            return bill;
        }
        }  
    ],
  },
]);

export default router;