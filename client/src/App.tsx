import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Suspense } from "react";
import LoadingComponent from "./helpers/LoadingComponent";


const Main = React.lazy(() => import("./screens/Login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
