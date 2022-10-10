import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import About from "./components/About";
import BookDetails from './components/BookDetails';
import Books from "./components/Books";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Root from "./components/Root";

export const router = createBrowserRouter([
    {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
    {
    path:'home',
    element: <Home></Home>
    },
    {
    path:'about',
    element: <About></About>
    },
    
    {
    path:'books',
    element: <Books></Books>,
    loader: () => {
        return  fetch('https://api.itbook.store/1.0/new')
    }
   
    },
    {
      path:'book/:id',
      element:<BookDetails></BookDetails>,
      loader: ({params}) => {
        return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      }
    }

    ]
    }
    
    
    ]);