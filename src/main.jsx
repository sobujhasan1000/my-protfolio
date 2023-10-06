import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routers/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='mx-4 bg-[#000000f0] '>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
