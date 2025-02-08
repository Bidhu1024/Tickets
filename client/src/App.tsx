
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import {Suspense} from 'react';
import LoadingComponent from './helpers/LoadingComponent';

const Login = React.lazy(() => import('./screens/Login/Login'));

function App() {
  

  return (
<BrowserRouter>
<Suspense fallback={<LoadingComponent/>}>
<Routes>
 
<Route path="/" element={<Login/>}/>

</Routes>
</Suspense>
</BrowserRouter>
  )
}

export default App
