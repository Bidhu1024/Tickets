import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import LoadingComponent from '../helpers/LoadingComponent';
import { useSelector } from 'react-redux';

// Lazy-loaded components
const Login = React.lazy(() => import('../screens/Login'));
const Dashboard = React.lazy(() => import('../screens/Dashboard'));
// const Shows = React.lazy(() => import('../screens/Shows'));
// const MySpace = React.lazy(() => import('../screens/MySpace'));
// const Support = React.lazy(() => import('../screens/Support'));
// const Notification = React.lazy(() => import('../screens/Notification'));
// const Profile = React.lazy(() => import('../screens/Profile'));

const AllRoutes = () => {
    const { token } = useSelector((state:any) => state.auth); 
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingComponent />}>
                <Routes>
                    {/* Public Route - Login */}
                    <Route
                        path="/login"
                        element={token ? <Navigate to="/dashboard" /> : <Login />}
                    />

                    {/* Private Routes */}
                    <Route
                        path="/dashboard"
                        element={token ? <Dashboard /> : <Navigate to="/login" />} 
                    />
                    {/* <Route
                        path="/shows"
                        element={token ? <Shows /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/myspace"
                        element={token ? <MySpace /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/support"
                        element={token ? <Support /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/notification"
                        element={token ? <Notification /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/profile"
                        element={token ? <Profile /> : <Navigate to="/login" />}
                    /> */}

                    {/* Default Route - Redirect to Login */}
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AllRoutes;