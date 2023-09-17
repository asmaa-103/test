import React from 'react'
import Layout from './Layout/Layout'
import { RouterProvider , createHashRouter } from 'react-router-dom'
import About from './About/About'

import Home from './Home/Home'
import Portfolio from './Portofolio/Portfolio'
import Contact from './Contact/Contact'
import NotFound from './Notfound/Notfound'


export default function App() {

let Routers= createHashRouter([
  {path:"", element:<Layout/> , children :[
    {path:"", element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"portfolio" ,element:<Portfolio/>},
    {path:"contact" ,element:<Contact/>},
    {path:"*" , element:<NotFound/>}
  ]}
])

  return (
    <>
 <RouterProvider router={Routers}/>
 

    </>
  )
}