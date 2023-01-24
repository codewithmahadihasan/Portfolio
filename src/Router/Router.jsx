import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Home from '../Components/Home'
import AllProjects from '../Components/Projects/AllProjects'
import SingleProject from '../Components/SingleProject/SingleProject'
import Error from './Error Pacge/Error'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Header></Header>,
      },

      {
        path: '/project/:id',
        element: <SingleProject></SingleProject>,
        loader: ({ params }) =>
          fetch(
            `https://protfolio-backend-loneliness-mahadi.vercel.app/project/${params.id}`,
          ),
      },
      { path: '*', element: <Error></Error> },
    ],
  },
])

export default Router
