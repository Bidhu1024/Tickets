import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingComponent from "../helpers/LoadingComponent";
const Main = React.lazy(() => import("../screens/Login"));

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
