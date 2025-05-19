import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import LoadingComponent from "../helpers/LoadingComponent";
import DashboardLayout from "../screens/Dashboard/DashboardLayout"; 
import Shows from "../screens/Shows/Shows";

const Login = React.lazy(() => import("../screens/Login"));
const Dashboard = React.lazy(() => import("../screens/Dashboard"));

const AllRoutes = () => {
  const { token } = useSelector((state: any) => state.auth);

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route
            path="/login"
            element={token ? <Navigate to="/dashboard" /> : <Login />}
          />

          {/* Private */}
          {token && (
            <Route path="/" element={<DashboardLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="shows" element={<Shows />} />
              
              {/* Add MySpace, Support, etc here later */}
            </Route>
          )}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
