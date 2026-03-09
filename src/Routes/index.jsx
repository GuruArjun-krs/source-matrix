import React, { Suspense, useContext, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import { Sidebaritems } from '../Utils/sidebarItems';
import { PageItems } from '../Utils/pageItems';
import Layout from '../Layout';
import Dashboard from '../Pages/Dashboard';
import GetStarted from '../Pages/Auth/GetStarted';

const MainRoute = () => {
    const { isAuthenticate, setAuthenticate } = useContext(AuthContext);

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === "token" || e.key === null) {
                setAuthenticate((prev) => ({
                    ...prev,
                    auth: !!localStorage.getItem("token"),
                }));
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [setAuthenticate]);

    const renderRoutes = (items) =>
        items?.map((item) => (
            <Route key={item.route} path={item.route} element={item.element} index={item.index}>
                {item.children && renderRoutes(item.children)}
            </Route>
        ));

    return (
        <BrowserRouter>
            <Suspense fallback={<div className="h-screen bg-black flex justify-center items-center text-white">Loading...</div>}>
                <Routes>
                    {!isAuthenticate?.auth ? (
                        <>
                            <Route path="/" element={<GetStarted />} />
                            {PageItems?.filter(el => !el.isAuth).map(el => (
                                <Route key={el.path} path={el.path} element={el.element} />
                            ))}
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </>
                    ) : (
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Navigate to="/dashboard" replace />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            {renderRoutes(Sidebaritems)}
                            <Route path="*" element={<Navigate to="/dashboard" replace />} />
                        </Route>
                    )}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default MainRoute;