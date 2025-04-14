import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux';
import router from './routers/router.jsx';
import { store } from "./redux/store.js";
createRoot(document.getElementById('root')).render(
// Wrap if you want:
<StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
</StrictMode>

)
